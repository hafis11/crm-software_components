import React from 'react'
import './newLead.css'
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { connect } from 'react-redux';
import { fetchLead, fetchLeadProduct, fetchSalesman } from '../../redux/action';
const axios = require("axios").default;
let moment = require('moment');

class NewLead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leadDetails: null,
            assignedSalesman: null,
            assignedSalesmanName: null,
            newRemarks: null,
            salesList: null
        }
        this.showProducts = this.showProducts.bind(this);
        this.handleSalesman = this.handleSalesman.bind(this);
        this.assign = this.assign.bind(this); // this function is called inside the modal window when user clicks confirm while assigning lead to another salesman
        this.addRemarks = this.addRemarks.bind(this);
    }

    showProducts() {
        if (this.props.products !== null && this.props.products !== undefined) {
            let productTags = [];
            this.props.products.forEach(product => {
                productTags.push(<div className="bg-primary p-1 mt-1 rounded-pill text-center text-white text-capitalize" key={product.idproducts} >{`${product.productName}`}</div>)
            })
            return productTags;
        } else {
            return <div className="bg-primary p-2 rounded-pill text-center text-white">Loading</div>
        }
    }

    handleSalesman(e) {
        if (e.target.value == "-1") {
            this.setState({ assignedSalesman: null });
        } else {
            $("#myModal").modal({ backdrop: "static", show: true }) && this.setState({ assignedSalesman: e.target.value, assignedSalesmanName: e.target.options[e.target.selectedIndex].text });
        }
    }

    assign() {
        let lead = this.state.leadDetails[0];
        let assignedId = this.state.assignedSalesman;
        lead.assignedTo = assignedId;
        let date = lead.createdDate;
        let newDate = moment(date).format("YYYY-MM-DD hh:mm:ss");
        lead.createdDate = newDate;
        console.log(lead);
        axios.put(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}`, { ...lead }, { withCredentials: true }).then(response => {
            if (response.status === 202) {
                $("#myModal").modal("dispose");
                alert("Successfuly Assigned the lead to new salesperson");
            } else {
                alert("Failed to assign salesperson");
            }
        }).catch(response => {
            alert("Failed to assign salesperson")
        })
    }

    addRemarks() {
        let lead = this.state.leadDetails[0];
        let assignedId = this.state.assignedSalesman;
        lead.assignedTo = assignedId;
        let date = lead.createdDate;
        let newDate = moment(date).format("YYYY-MM-DD hh:mm:ss");
        lead.createdDate = newDate;
        lead.remarks = this.state.newRemarks
        console.log(lead);
        axios.put(`http://localhost:3001/sales/${this.props.idsales}/leads/${this.props.idleads}`, { ...lead }, { withCredentials: true }).then(response => {
            if (response.status === 202) {
                alert("Successfuly Updated The Remarks");
                this.setState({ newRemarks: null })
            } else {
                alert("Failed to update remarks");
            }
        }).catch(response => {
            alert("Failed to update remarks")
        })
    }

    componentDidMount() {
        this.props.dispatch(fetchLead(this.props.idsales, this.props.idleads));
        this.props.dispatch(fetchLeadProduct(this.props.idsales, this.props.idleads));
        this.props.dispatch(fetchSalesman());
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.salesmanList !== prevProps.salesmanList && this.props.salesmanList !== null && this.props.salesmanList !== undefined) {
            let salesmanOptions = [];
            this.props.salesmanList.forEach(sales => {
                salesmanOptions.push(<option key={sales.idsales} value={sales.idsales} > {`${sales.fname} ${sales.lname}`}</option>);
            })
            this.setState({ salesList: salesmanOptions });
        }
        if (this.props.lead !== prevProps.lead) {
            this.setState({ leadDetails: this.props.lead })
        }
    }

    render() {
        return (
            <div className="newlead-condainer mt-1 d-flex flex-column justify-content-around ">                
            {/* --------------------------MODAL------------------------------------------ */}
                <div className="modal" id="myModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Assiginment of Salesman</h5>
                            </div>
                            <div className="modal-body">
                                <p className="text-capitalize">Please press confirm to assign this lead to {`${this.state.assignedSalesmanName}`} </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.assign}>Confirm</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { $("#myModal").modal("dispose") && this.setState({ assignedSalesman: null, assignedSalesmanName: null }) }} >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------MODAL------------------------------------------ */}
                {/* section1 */}
                <div className="d-flex flex-row justify-content-around">
                    <div className="newload-box pl-0 pr-0 col-3 rounded shadow">
                        <div className="d-flex justify-content-end mt-n4 mr-n1">
                            <span className="fa fa-caret-left glyphicon" style={{ color: '#94feaa' }}></span>
                        </div>
                        <div className="name-condainer d-flex flex-column align-items-center justify-content-around mt-n2">
                            <div className="name-tag d-flex flex-row justify-content-center align-items-center">
                                <div>
                                    <img className="lead-profile rounded-circle ml-2" src="https://p16.muscdn.com/img/musically-maliva-obj/1637841601569797~c5_1080x1080.jpeg"></img>
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <snap className="lead-name-text font-weight-bold text-capitalize">{this.props.lead !== null ? `${this.props.lead[0].fname} ${this.props.lead[0].lname}` : "Loading"}</snap>
                                    <span className="lead-name-text">{this.props.lead !== null ? `${this.props.lead[0].companyName}` : "Loading"}</span>
                                </div>
                            </div>
                            <div className="name-tag d-flex flex-column align-items-start text-dark justify-content-around">
                                <snap className="fa fa-envelope"><snap className="lead-contact ml-3">{this.props.lead !== null ? `${this.props.lead[0].email}` : "Loading"}</snap></snap>
                                <snap className="fa fa-phone"><snap className="lead-contact ml-3">{this.props.lead !== null ? `${this.props.lead[0].companyPhone}` : "Loading"}</snap></snap>
                                <snap className="fa fa-edge "><snap className="lead-contact ml-3 text-lowercase">{this.props.lead !== null ? `${this.props.lead[0].companyWebsite}` : "Loading"}</snap></snap>
                            </div>
                        </div>
                    </div>
                    <div className="newload-box pl-0 pr-0 col-3 rounded shadow">
                        <div className="d-flex justify-content-end mt-n4 mr-n1">
                            <span className="fa fa-caret-left glyphicon" style={{ color: '#99e9ff' }}></span>
                        </div>
                        <div className="name-condainer d-flex justify-content-around align-items-center flex-column">
                            <div>
                                <snap className="lead-info-head font-weight-bold">Lead Information</snap>
                            </div>
                            <div className="d-flex flex-column justify-content-around" style={{ height: '18vh' }}>
                                <div className="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap className="lead-info-data">Source</snap>
                                    <snap className="lead-info-data text-capitalize">{this.props.lead !== null ? `${this.props.lead[0].source}` : "Loading"}</snap>
                                </div>
                                {/* <div className="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap className="lead-info-data">Created by</snap>
                                    <snap className="lead-info-data">Hafis</snap>
                                </div> */}
                                <div className="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap className="lead-info-data">Created on</snap>
                                    <snap className="lead-info-data">{this.props.lead !== null ? `${moment(this.props.lead[0].createdDate).format("DD MMM YYYY")}` : "Loading"}</snap>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newload-box pl-0 pr-0 col-3 rounded shadow">
                        <div className="d-flex justify-content-end mt-n4 mr-n1">
                            <span className="fa fa-caret-left glyphicon" style={{ color: '#c897fe' }}></span>
                        </div>
                        <div className="name-condainer d-flex flex-column justify-content-around align-items-center  ">
                            <div>
                                <snap className="lead-address-head font-weight-bold">Product Information</snap>
                            </div>
                            <div className="product-box d-flex justify-content-center align-items-center flex-column">
                                {/* <div className="bg-primary p-2 rounded-pill">Product 1</div> */}
                                {this.showProducts()}
                            </div>
                        </div>
                    </div>
                </div>
                {/* section2 */}
                <div className="d-flex flex-row justify-content-around">
                    <div className="newload-box pl-0 pr-0 col-3 rounded shadow">
                        <div className="d-flex justify-content-end mt-n4 mr-n1">
                            <span className="fa fa-caret-left glyphicon" style={{ color: '#fb999a' }}></span>
                        </div>
                        <div className="name-condainer d-flex justify-content-around align-items-center flex-column">
                            <div>
                                <snap className="lead-address-head font-weight-bold">Address Details</snap>
                            </div>
                            <div className="d-flex flex-column justify-content-around" style={{ height: '18vh' }}>
                                <div className="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap className="lead-info-data">Street</snap>
                                    <snap className="lead-info-data">{this.props.lead !== null ? `${this.props.lead[0].companyAddress}` : "Loading"}</snap>
                                </div>
                                <div className="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap className="lead-info-data">Emirate</snap>
                                    <snap className="lead-info-data">{this.props.lead !== null ? `${this.props.lead[0].emirate}` : "Loading"}</snap>
                                </div>
                                <div className="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap className="lead-info-data">Zipcode</snap>
                                    <snap className="lead-info-data">685588</snap>
                                </div>
                                <div className="lead-tag d-flex flex-row justify-content-between align-items-center">
                                    <snap className="lead-info-data">City</snap>
                                    <snap className="lead-info-data">Al-hail</snap>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newload-box pl-0 pr-0 col-3 rounded shadow">
                        <div className="d-flex justify-content-end mt-n4 mr-n1">
                            <span className="fa fa-caret-left glyphicon" style={{ color: '#fef498' }}></span>
                        </div>
                        <div className="name-condainer d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <snap className="lead-remark font-weight-bold">Remarks</snap>
                            </div>
                            <div>
                                <snap className="lead-remark text-justify">{this.props.lead !== null ? `${this.props.lead[0].remarks}` : "Loading"}</snap>
                            </div>
                            <div>
                                <textarea className="lead-textarea border-0 text-dark" placeholder="Remarks" onInput={(e) => { this.setState({ newRemarks: e.target.value }) }}></textarea>
                            </div>
                            <div type="button" className="add-button rounded bg-primary p-2 d-flex align-items-center justify-content-center text-white" onClick={this.addRemarks}><snap>Add</snap></div>
                        </div>
                    </div>
                    <div className="newload-box pl-0 pr-0 col-3 rounded shadow">
                        <div className="d-flex justify-content-end mt-n4 mr-n1">
                            <span className="fa fa-caret-left glyphicon" style={{ color: '#fec4a7' }}></span>
                        </div>
                        <div className="name-condainer d-flex flex-column justify-content-around align-items-center">
                            <div>
                                <snap className="lead-address-head font-weight-bold">Salesperson</snap>
                            </div>
                            <div>
                                <img className="lead-profile rounded-circle ml-2" src="https://metro.co.uk/wp-content/uploads/2019/04/SEI_63947760.jpg?quality=90&strip=all"></img>
                            </div>
                            <div >
                                <select className="lead-selecter" onChange={this.handleSalesman}>
                                    <option value={"-1"}>Choose...</option>
                                    {
                                        this.state.salesList !== null ? this.state.salesList : <></>
                                    }
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

        fetchProductError: state.salesNewLead.isFetchLeadProductFailed,
        fetchProductRequest: state.salesNewLead.isFetchLeadProductRequest,
        fetchProductSuccess: state.salesNewLead.isFetchLeadProductSuccess,

        fetchSalesmanRequest: state.adminLead.isFetchingSalesman,
        fetchSalesmanFailed: state.adminLead.fetchSalesmanError,
        fetchSalesmanSuccess: state.adminLead.fetchSalesmanSuccess,


        lead: state.salesNewLead.lead,
        idleads: state.salesNewLead.idleads,
        idsales: state.salesNewLead.idsales,
        products: state.salesNewLead.products,
        salesmanList: state.adminLead.salesmanList,

    }
}

export default connect(mapStateToProps)(NewLead);