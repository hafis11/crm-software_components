import React from 'react'
import './newLead.css'
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { connect } from 'react-redux';
import { fetchLead, fetchLeadProduct } from '../../redux/action';
const axios = require("axios").default;

class NewLead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leadDetails: null
        }
        this.showProducts = this.showProducts.bind(this);
    }

    showProducts(){
        if(this.props.products!==null && this.props.products!==undefined){
            let productTags = [];
            this.props.products.forEach(product=>{
                productTags.push(<div class="bg-primary p-2 rounded-pill text-center text-white text-capitalize" key={product.idproducts} >{`${product.productName}`}</div>)
            })
            return productTags;
        }else{
            return <div class="bg-primary p-2 rounded-pill text-center text-white">Loading</div>
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchLead(this.props.idsales, this.props.idleads));
        this.props.dispatch(fetchLeadProduct(this.props.idsales, this.props.idleads));
    }

    render() {
        return (
            <div class="newlead-condainer mt-1 d-flex flex-column justify-content-around ">
                {/* section1 */}
                <div class="d-flex flex-row justify-content-around">
                    <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                        <div class="d-flex justify-content-end mt-n4 mr-n1">
                            <span class="fa fa-caret-left glyphicon" style={{ color: '#94feaa' }}></span>
                        </div>
                        <div class="name-condainer d-flex flex-column align-items-center justify-content-around mt-n2">
                            <div class="name-tag d-flex flex-row justify-content-center align-items-center">
                                <div>
                                    <img class="lead-profile rounded-circle ml-2" src="https://p16.muscdn.com/img/musically-maliva-obj/1637841601569797~c5_1080x1080.jpeg"></img>
                                </div>
                                <div class="d-flex flex-column ml-3">
                                    <snap class="lead-name-text font-weight-bold text-capitalize">{this.props.lead !== null ? `${this.props.lead[0].fname} ${this.props.lead[0].lname}` : "Loading"}</snap>
                                    <span class="lead-name-text">{this.props.lead !== null ? `${this.props.lead[0].companyName}` : "Loading"}</span>
                                </div>
                            </div>
                            <div class="name-tag d-flex flex-column align-items-start text-dark justify-content-around">
                                <snap class="fa fa-envelope"><snap class="lead-contact ml-3">{this.props.lead !== null ? `${this.props.lead[0].email}` : "Loading"}</snap></snap>
                                <snap class="fa fa-phone"><snap class="lead-contact ml-3">{this.props.lead !== null ? `${this.props.lead[0].companyPhone}` : "Loading"}</snap></snap>
                                <snap class="fa fa-edge "><snap class="lead-contact ml-3 text-lowercase">{this.props.lead !== null ? `${this.props.lead[0].companyWebsite}` : "Loading"}</snap></snap>
                            </div>
                        </div>
                    </div>
                    <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mt-n4 mr-n1">
                            <span class="fa fa-caret-left glyphicon" style={{ color: '#94feaa' }}></span>
                        </div>
                        <div class="name-condainer d-flex justify-content-around align-items-center flex-column">
                            <div>
                                <snap class="lead-info-head font-weight-bold">Lead Information</snap>
                            </div>
                            <div class="d-flex flex-column justify-content-around" style={{ height: '18vh' }}>
                                <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap class="lead-info-data">Source</snap>
                                    <snap class="lead-info-data text-capitalize">{this.props.lead !== null ? `${this.props.lead[0].source}` : "Loading"}</snap>
                                </div>
                                {/* <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap class="lead-info-data">Created by</snap>
                                    <snap class="lead-info-data">Hafis</snap>
                                </div> */}
                                <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap class="lead-info-data">Created on</snap>
                                    <snap class="lead-info-data">{this.props.lead !== null ? `${this.props.lead[0].createdDate}` : "Loading"}</snap>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mt-n4 mr-n1">
                            <span class="fa fa-caret-left glyphicon" style={{ color: '#94feaa' }}></span>
                        </div>
                        <div class="name-condainer d-flex flex-column justify-content-around align-items-center  ">
                            <div>
                                <snap class="lead-address-head font-weight-bold">Product Information</snap>
                            </div>
                            <div>
                                {/* <div class="bg-primary p-2 rounded-pill">Product 1</div> */}
                                {this.showProducts()}
                            </div>
                        </div>
                    </div>
                </div>
                {/* section2 */}
                <div class="d-flex flex-row justify-content-around">
                    <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mt-n4 mr-n1">
                            <span class="fa fa-caret-left glyphicon" style={{ color: '#94feaa' }}></span>
                        </div>
                        <div class="name-condainer d-flex justify-content-around align-items-center flex-column">
                            <div>
                                <snap class="lead-address-head font-weight-bold">Address Details</snap>
                            </div>
                            <div class="d-flex flex-column justify-content-around" style={{ height: '18vh' }}>
                                <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap class="lead-info-data">Street</snap>
                                    <snap class="lead-info-data">{this.props.lead !== null ? `${this.props.lead[0].companyAddress}` : "Loading"}</snap>
                                </div>
                                <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap class="lead-info-data">Emirate</snap>
                                    <snap class="lead-info-data">{this.props.lead !== null ? `${this.props.lead[0].emirate}` : "Loading"}</snap>
                                </div>
                                <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap class="lead-info-data">Zipcode</snap>
                                    <snap class="lead-info-data">685588</snap>
                                </div>
                                <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap class="lead-info-data">City</snap>
                                    <snap class="lead-info-data">Al-hail</snap>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mt-n4 mr-n1">
                            <span class="fa fa-caret-left glyphicon" style={{ color: '#94feaa' }}></span>
                        </div>
                        <div class="name-condainer d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <snap class="lead-remark font-weight-bold">{this.props.lead !== null ? `${this.props.lead[0].remarks}` : "Loading"}</snap>
                            </div>
                            <div>
                                <textarea class="lead-textarea border-0" placeholder="Remarks"></textarea>
                            </div>
                            <div type="button" class="add-button rounded bg-primary p-2 d-flex align-items-center justify-content-center"><snap>Add</snap></div>
                        </div>
                    </div>
                    <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mt-n4 mr-n1">
                            <span class="fa fa-caret-left glyphicon" style={{ color: '#94feaa' }}></span>
                        </div>
                        <div class="name-condainer d-flex flex-column justify-content-around align-items-center">
                            <div>
                                <snap class="lead-address-head font-weight-bold">Salesperson</snap>
                            </div>
                            <div>
                                <img class="lead-profile rounded-circle ml-2" src="https://metro.co.uk/wp-content/uploads/2019/04/SEI_63947760.jpg?quality=90&strip=all"></img>
                            </div>
                            <div >
                                <select class="lead-selecter">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
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
        fetchFailed: state.salesNewLead.isFetchNewLeadFailed,
        fetchRequest: state.salesNewLead.isFetchNewLeadRequest,
        fetchSuccess: state.salesNewLead.isFetchNewLeadSuccess,

        fetchProductError:state.salesNewLead.isFetchLeadProductFailed,
        fetchProductRequest:state.salesNewLead.isFetchLeadProductRequest,
        fetchProductSuccess:state.salesNewLead.isFetchLeadProductSuccess,

        lead: state.salesNewLead.lead,
        idleads: state.salesNewLead.idleads,
        idsales: state.salesNewLead.idsales,
        products: state.salesNewLead.products,

    }
}

export default connect(mapStateToProps)(NewLead);