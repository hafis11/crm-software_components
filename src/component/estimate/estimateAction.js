import React, { Component } from "react"
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adder from "./adder"
import PreviewAdder from "./previewAdder"
import './estimate.css'
import { connect } from 'react-redux';
import { fetchLead } from '../../redux/action';

const axios = require("axios").default;
const moment = require("moment");

class Estimate extends Component {
    constructor() {
        super()
        this.state = {
            hasEstimate: false,
            estimateDetails: null,
            estimateProducts: null,
            products: null,
            newProduct: null,
            newQuantity: null
        }
        this.fetchEstimate = this.fetchEstimate.bind(this);
        this.fetchProducts = this.fetchProducts.bind(this);
        this.showProductRow = this.showProductRow.bind(this);
        this.showProductOption = this.showProductOption.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    // this.setState({ Rendercomps: productList.map(items => <Adder key={items.id} product={items.productName} id={items.id} units={items.units} gTotal={items.grandTotal} deleteAction={this.onDeleteHandler} />) });
    // this.setState({ RenderPreviewComps: productList.map(items => <PreviewAdder key={items.id} product={items.productName} id={items.id} units={items.units} gTotal={items.grandTotal} />) });

    showProductRow() {
        if (this.state.estimateProducts !== null && this.state.estimateProducts !== undefined) {
            let productRow = [];
            this.state.estimateProducts.forEach(product => {
                productRow.push(<Adder key={product.idproducts} product={product.productName} id={product.idproducts} units={product.quantity} price={product.price} deleteID={product.idsingleEstimate_has_products} deleteAction={this.deleteProduct} />);
            })
            return productRow;
        }
    }

    showPreview() {
        if (this.state.estimateProducts !== null && this.state.estimateProducts !== undefined) {
            let productRow = [];
            this.state.estimateProducts.forEach(product => {
                productRow.push(<PreviewAdder key={product.idproducts} product={product.productName} id={product.idproducts} units={product.quantity} price={product.price} deleteAction={this.onDeleteHandler} />);
            })
            return productRow;
        }
    }

    fetchEstimate() {
        if (this.props.lead !== null && this.props.lead !== undefined) {
            if (this.props.lead[0].singleestimate_idsingleEstimate === null) {
                //create the estimate.
                let date = moment().format("YYYY-MM-DD hh:mm:ss");
                axios.post(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}/estimate`, {
                    estimateDate: date,
                    total: "0"
                }, {
                    withCredentials: true
                }).then(response => {
                    let est_id = response.data.insertId;
                    axios.get(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}/estimate/${est_id}`, { withCredentials: true }).then(response => {
                        if (response.status === 200) {
                            this.setState({ hasEstimate: true, estimateDetails: response.data, estimateProducts: null })
                        }
                    }).catch(response => {
                        alert("Failed to create estimate");
                    })
                }).catch(response => {
                    alert("Creating estimate failed.")
                });
            } else {
                //fetch the estimate details and products and set it as state.
                axios.get(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}/estimate/${this.props.lead[0].singleestimate_idsingleEstimate}`, {
                    withCredentials: true
                }).then(response => {
                    let data = response.data;
                    axios.get(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}/estimate/${this.props.lead[0].singleestimate_idsingleEstimate}/products`, {
                        withCredentials: true
                    }).then(response => {
                        if (response.data.length === 0) {
                            this.setState({ hasEstimate: true, estimateDetails: data, estimateProducts: null });
                        } else {
                            this.setState({ hasEstimate: true, estimateDetails: data, estimateProducts: response.data });
                        }
                    }).catch(response => {
                        alert("Failed to fetch estimate products");
                    });
                }).catch(response => {
                    alert("Error while fetching estimate details");
                })
            }
        }
    }

    fetchProducts() {
        axios.get("http://localhost:3001/products", { withCredentials: true }).then(response => {
            if (response.data.length !== 0) {
                this.setState({ products: response.data })
            }
        }).catch(response => {
            alert("Failed to fetch products");
        })
    }

    showProductOption() {
        if (this.state.products !== null && this.state.products !== undefined) {
            let productOptions = [];
            this.state.products.forEach(product => {
                productOptions.push(<option key={product.idproducts} value={product.idproducts}>{product.productName}</option>)
            })
            return (<select defaultValue={null} onChange={e => { if (e.target.value !== null) this.setState({ newProduct: e.target.value }) }}>{productOptions}</select>)
        }
    }

    addProduct() {
        if (this.state.newProduct !== null && this.state.newQuantity !== null) {
            axios.post(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}/estimate/${this.state.estimateDetails[0].idsingleEstimate}/products`, {
                singleestimate_idsingleEstimate: this.state.estimateDetails[0].idsingleEstimate,
                idproducts: this.state.newProduct,
                quantity: this.state.newQuantity
            }, {
                withCredentials: true
            }).then(response => {
                if (response.status === 201) {
                    this.setState({ newProduct: null, newQuantity: null, estimateDetails: null });
                }
                else {
                    alert("Error Might have occured when adding product");
                }
            }).catch(response => {
                alert("Failed to add product")
            })
        }
    }

    deleteProduct(id) {
        axios.delete(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}/estimate/${this.props.lead[0].singleestimate_idsingleEstimate}/products/${id}`, {
            withCredentials: true
        }).then(response => {
            if (response.status === 200) {
                alert("Product Deleted Successfully");
                this.setState({ estimateDetails: null });
            }
        }).catch(response => {
            alert("Failed to delete product");
        })
    }

    componentDidMount() {
        this.props.dispatch(fetchLead(this.props.idsales, this.props.idleads));// fetch the lead details 
        this.fetchProducts();
        this.fetchEstimate();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.estimateDetails === null) {
            this.fetchEstimate();
        }
    }

    render() {
        return (
            <div class="condent-body h-auto d-flex flex-column align-items-center mt-n1">
                {/* section2 */}
                <div class="options d-flex justify-content-between mt-4">
                    {/* three buttons */}
                    <div class="section1 d-flex ">
                        <div class="Create bg-light d-flex justify-content-center align-items-center" type="button"><span>Create</span></div>
                        <div class="Draft bg-light d-flex justify-content-center align-items-center" type="button"><span>Draft</span></div>
                        <div class="History bg-light d-flex justify-content-center align-items-center" type="button"><span>History</span></div>
                    </div>
                    {/* two colour buttons */}
                    <div class="section2 d-flex">
                        <div class="send bg-light d-flex justify-content-between align-items-center pl-1" type="button">
                            <div class="circle0 rounded-circle d-flex justify-content-center align-items-center text-light"><i class="fa fa-paper-plane"></i></div>
                            <span class="sent-text pr-2">Send</span>
                        </div>
                        <div class="send1 bg-light d-flex justify-content-between align-items-center ml-3 pl-1" type="button">
                            <div class="circle1 rounded-circle d-flex justify-content-center align-items-center text-light"><i class="fa fa-envelope-open "></i></div>
                            <span class="sent-text1 pr-2">Draft</span>
                        </div>
                    </div>
                </div>
                {/* section2 closed */}
                <div class="condent mt-2 d-flex flex-row">
                    <div class="box1 col-md-6">
                        {/* product tab */}
                        <div class="producttab h-auto mt-5">
                            <h4 class="ml-3 mb-0 m-2">Product Info</h4>
                            <div class="d-flex  p-2 align-items-center">
                                {/* <select id="products" defaultValue="Volvo" class="col-4  rounded-lg" defaultChecked="Volvo" name="product" onChange={event => this.setState({ selectedProduct: event.target.value })} >
                                    <option value="Volvo">Volvo</option>
                                    <option value="Saab">Saab</option>
                                    <option value="Fiat">Fiat</option>
                                    <option value="Audi">Audi</option>
                                </select> */}
                                {this.showProductOption()}
                                <input class="unit-adder ml-5  mr-4 form-control bg-light border-0 w-25" type="number" min={1} defaultValue={null} placeholder="Qty" onChange={e => { if (e.target.value !== null) this.setState({ newQuantity: e.target.value }) }}></input>
                                <div class="d-flex align-items-center text-success" style={{ fontSize: "1.5vw" }} onClick={this.addProduct}><i class="fa fa-plus-circle" /></div>
                            </div>
                            <table class="table table-borderless table-hover">
                                <thead class="thead">
                                    <tr >
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.Rendercomps} */}
                                    {this.showProductRow()}
                                </tbody>
                            </table>
                            {/* Add product */}
                        </div>
                        {/* product tab close */}
                    </div>
                    <div class="box1 col-md-6">
                        {/* contact */}
                        <div class="estimate-head">
                            <div class="text-condent d-flex flex-row justify-content-between p-4 mt-4">
                                <div class="senter-text d-flex flex-column align-items-start">
                                    <h3 class="text-primary">SENDER</h3>
                                    <h4>Your Company Name</h4>
                                    <small>Address</small>
                                    <small>companymail@gmail.com</small>
                                    <small>111-111-111</small>
                                    <small>company.com</small>
                                </div>
                                <div class="senter-text d-flex flex-column align-items-end">
                                    <h3 class="text-primary">SENT TO</h3>
                                    <h4 className="text-capitalize">{`${this.props.lead[0].fname} ${this.props.lead[0].lname} `}</h4>{/* <h4>James Merced</h4> */}
                                    <small className="text-capitalize">{`${this.props.lead[0].companyAddress}`}</small>{/* <small>kwik kopy printing</small> */}
                                    <small>{`${this.props.lead[0].email}`}</small>{/* <small>jamesmerced@gmail.com</small> */}
                                    <small>{this.props.lead[0].companyPhone}</small>{/* <small>555-555-555</small> */}
                                    <small>{this.props.lead[0].companyWebsite}</small>{/* <small>kwikkopy.com</small> */}
                                </div>
                            </div>
                            {/* contact finished */}
                            <div class="senter-text d-flex flex-column pl-4 pb-2">
                                <h4>ESTIMATE DATE</h4>
                                <small>{(this.state.estimateDetails !== null && this.state.estimateDetails !== undefined && this.state.estimateDetails.length !== 0) ? moment(this.state.estimateDetails[0].estimateDate).format("DD/MM/YYYY") : <></>}</small>{/* <small>20/02/2020</small> */}
                            </div>
                        </div>
                        <div class="mt-5">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.RenderPreviewComps} */}
                                    {this.showPreview()}
                                </tbody>
                            </table>
                            <hr class="mt-5" />
                            <div class="d-flex justify-content-end pb-5">
                                <div class="total-tab d-flex flex-row col-3 justify-content-between align-items-center p-4 mt-n3">
                                    <h4 class="mb-0">TOTAL</h4>
                                    <h4 class="mb-0">{(this.state.estimateDetails !== null && this.state.estimateDetails !== undefined && this.state.estimateDetails.length !== 0) ? this.state.estimateDetails[0].total : <></>}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lead: state.salesNewLead.lead,
        products: state.salesNewLead.products,
        idleads: state.salesNewLead.idleads,
        idsales: state.salesNewLead.idsales,
    }
}

export default connect(mapStateToProps)(Estimate)