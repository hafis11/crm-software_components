import React from 'react'
import './lead.css';
import TopBar from '../../component/TopBar/TopBar';
import LeadAdder from '../../component/leadAdder/sideMenu';
import Estimate from "../../component/estimate/estimateAction"
import FollowUp from '../../component/followUp/followUp'
import NewLead from '../../component/newLead/newLead'
import { BrowserRouter, Route, Switch, Link ,NavLink,Router } from "react-router-dom";

export default class Lead extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            showLeadsAndInvoice: true
        }
        this.showLeads = this.showLeads.bind(this);
    }
    componentDidMount() {
        this.setState({
            list: allleads.map(leads => <tbody>
                <tr>
                    <td>{leads.name}</td>
                    <td>{leads.emirate}</td>
                    <td>{leads.product}</td>
                    <td>{leads.created_date}</td>
                    <td>NewLead</td>
                    <td><Link className="fa fa-eye text-success" onClick={() => this.onClickHandler()} ></Link></td>
                </tr>
            </tbody>)
        })
    }
    onClickHandler = () => {
        this.setState({showLeadsAndInvoice:false,match:this.props.match});
    }

    showLeads() {
        if (this.state.showLeadsAndInvoice === true) {
            return (
                <div class="bg-light" style={{ height: '100vh', width: '94vw' }}>
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
            // let match = useRouteMatch();
            return (
                <div className="container-fluid p-0 d-flex pt-4" style={{ overflow: "hidden", flexDirection: "column", backgroundColor: '#f7f7f7' }}>
                    <Router history={this.props.history}>
                        <div className="d-flex mx-auto my-3 bg-primary text-white rounded-pill" style={{ height: "5%" }}>
                            <NavLink to={`${this.state.match.url}/`} activeClassName="activeLead" className="stepper-bar bg-danger d-flex justify-content-center"><span>New Lead</span></NavLink>
                            <NavLink to={`${this.state.match.url}/followUp`} activeClassName="activeLead" className="stepper-bar  bg-success d-flex justify-content-center"><span>Follow_Up</span></NavLink>
                            <NavLink to={`${this.state.match.url}/estimate`} activeClassName="activeLead" className="stepper-bar bg-warning d-flex justify-content-center"><span>Estimate</span></NavLink>
                            <NavLink to={`${this.state.match.url}/invoice`} activeClassName="activeLead" className="stepper-bar bg-secondary d-flex justify-content-center"><span>Invoice</span></NavLink>
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

const allleads = [
    {
        name: "Stella",
        emirate: "Dubai",
        product: "crane",
        created_date: "12-may-2018",
    },
    {
        name: "Stella",
        emirate: "Dubai",
        product: "crane",
        created_date: "12-may-2018",
    },
    {
        name: "Stella",
        emirate: "Dubai",
        product: "crane",
        created_date: "12-may-2018",
    }
]
