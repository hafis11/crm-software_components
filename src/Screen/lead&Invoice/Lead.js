import React from 'react'
import './lead.css';
import LeadAdder from '../../component/leadAdder/sideMenu';
import Estimate from "../../component/estimate/estimateAction"
import FollowUp from '../../component/followUp/followUp'
import NewLead from '../../component/newLead/newLead'
import TopBar from '../../component/TopBar/TopBar'

import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch, Link, NavLink, Router } from "react-router-dom";
import {setLeadId} from '../../redux/action'
import {connect} from 'react-redux';


const axios = require("axios").default;

class Lead extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            showLeadsAndInvoice: true,
            idleads:null
        }
        this.showLeads = this.showLeads.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/sales/${this.props.location.state.idsales}/leads`, {
            withCredentials: true
        }).then(response => {
            this.setState({
                list: response.data.map(leads => <tbody>
                    <tr key={leads.idleads}>
                        <td>{`${leads.fname} ${leads.lname}`}</td>
                        <td>{leads.emirate}</td>
                        <td></td>
                        <td></td>
                        <td>{`${leads.status}`}</td>
                        <td><Link className="fa fa-eye text-success" onClick={() => this.onClickHandler(leads.idleads)} key={leads.idleads}></Link></td>
                    </tr>
                </tbody>)
            });
        }).catch(response => {
            console.log(response);
        })
    }

    onClickHandler = (idleads) => {
        this.props.dispatch(setLeadId(this.props.location.state.idsales,idleads));
        this.setState({showLeadsAndInvoice: false, match: this.props.match });
    }

    showLeads() {
        if (this.state.showLeadsAndInvoice === true) {
            return (
                <div class="bg-light" style={{ width: '94vw' }}>
                    <TopBar></TopBar>
                    <div class="head d-flex flex-row justify-content-between align-items-center">
                        <div class="head-text pl-5">Lead & Invoice</div>
                        <LeadAdder></LeadAdder>
                    </div>
                    <div class="lead-table">
                        <table class="table table-hover table">
                            <thead>
                                <tr>
                                    <th scope="col">CUSTOMER</th>
                                    <th scope="col">EMIRATE</th>
                                    <th scope="col">TAGS</th>
                                    <th scope="col">CREATED DATE</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* <tbody>
                            <tr>
                                <td>Stella</td>
                                <td>Dubai</td>
                                <td>Crane</td>
                                <td>23 May 2019</td>
                                <td>NewLead</td>
                                <td class="fa fa-eye text-success"onClick = {()=>this.onClickHandler()}></td>
                            </tr>
                        </tbody> */}
                            {/* <Leadlist></Leadlist> */}
                            {this.state.list}

                        </table>
                    </div>
                </div>
            )
        }
        else if (this.state.showLeadsAndInvoice === false) {
            return (
                <div className="container-fluid p-0 d-flex" style={{ overflow: "hidden", flexDirection: "column", backgroundColor: '#f7f7f7' }}>
                    <Router history={this.props.history}>
                        <div className="d-flex mx-auto my-3 bg-primary text-white rounded-pill" style={{ height: "5%" }}>
                            <NavLink to={{pathname:`${this.state.match.url}/`,state:{idsales:this.props.location.state.idsales,idleads:this.props.idleads}}} activeClassName="activeLead" className="stepper-bar bg-danger d-flex justify-content-center"><span>New Lead</span></NavLink>
                            <NavLink to={{pathname:`${this.state.match.url}/followUp`,state:{idsales:this.props.location.state.idsales,idleads:this.state.idleads}}} activeClassName="activeLead" className="stepper-bar  bg-success d-flex justify-content-center"><span>Follow_Up</span></NavLink>
                            <NavLink to={{pathname:`${this.state.match.url}/estimate`,state:{idsales:this.props.location.state.idsales,idleads:this.state.idleads}}} activeClassName="activeLead" className="stepper-bar bg-warning d-flex justify-content-center"><span>Estimate</span></NavLink>
                            <NavLink to={{pathname:`${this.state.match.url}/invoice`,state:{idsales:this.props.location.state.idsales,idleads:this.state.idleads}}} activeClassName="activeLead" className="stepper-bar bg-secondary d-flex justify-content-center"><span>Invoice</span></NavLink>
                        </div>
                        <Switch>
                            <Route exact path={`${this.state.match.path}/`} component={NewLead} />
                            <Route path={`${this.state.match.path}/followUp`} component={FollowUp} />
                            <Route path={`${this.state.match.path}/estimate`} component={Estimate} />
                            <Route path={`${this.state.match.path}/invoice`} component={Estimate} />
                        </Switch>
                    </Router>
                </div>
            )
        }
    }

    render() {
        return (
            <BrowserRouter>
                {this.showLeads()}
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return{
        idleads:state.salesNewLead.idleads
    }    
}

export default connect(mapStateToProps)(Lead);