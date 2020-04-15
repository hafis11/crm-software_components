import React from 'react';
import './home.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {  NavLink, useRouteMatch } from 'react-router-dom';
import DashBoard from './Screen/DashBoard/dashBoard'
import Lead from './Screen/lead&Invoice/Lead'
import Product from './Screen/Product/Product'
import Report from './Screen/Report/report'
import Estimate from "./component/estimate/estimateAction"
import FollowUp from './component/followUp/followUp'
import NewLead from './component/newLead/newLead'

class Home extends React.Component{

  render(){
      return(
        <Router>
        <div class="wrapper d-flex">
        <div class="sidebar bg-primary">
            <div class="sidebar-header d-flex justify-content-center align-items-center">
              <img src="../companylogo.png"class="logo"/>
            </div>
            <ul class="list-unstyled components d-flex flex-column align-items-center mt-5">
              <li class="sidebar-opt mb-4">
                  <Link class="sidebarlink nav-link" to="/">
                      <i class="sidebar-option fa fa-tachometer" data-toggle="tooltip"data-placement="right" title="Dashboard"></i>
                  </Link>
              </li>
              <li class="sidebar-opt mb-4">
                  <Link class="sidebarlink nav-link" to="/lead">
                      <i class="sidebar-option fa fa-leanpub"data-toggle="tooltip"data-placement="right" title="Lead"></i>
                  </Link>
              </li>
              <li class="sidebar-opt mb-4">
                  <Link class="sidebarlink nav-link" to="/product">
                      <i class="sidebar-option fa fa-opencart"data-toggle="tooltip"data-placement="right" title="Product"></i>
                  </Link>
              </li>
              <li class="sidebar-opt mb-4">
                  <Link class="sidebarlink nav-link" to="/report">
                      <i class="sidebar-option fa fa-file-text"data-toggle="tooltip"data-placement="right" title="Report"></i> 
                  </Link>
              </li>
            </ul>
        </div>  
          <div>
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route path="/lead" component={Lead}><Leads></Leads></Route>
              <Route path="/product" component={Product} />
              <Route path="/report" component={Report} />
            </Switch>
          </div>
        </div>
      </Router>
      )
  }
}

const Leads = () => {
let match = useRouteMatch();
return (
  <div className="container-fluid p-0 d-flex" style={{overflow:"hidden",flexDirection:"column",backgroundColor:'#f7f7f7'}}>
    <Router>
      <div className="d-flex mx-auto my-3 bg-primary text-white rounded-pill" style={{height:"5%"}}>
        <NavLink to={`${match.url}/`} activeClassName="activeLead" className="stepper-bar bg-danger d-flex justify-content-center"><span>New Lead</span></NavLink>
        <NavLink to={`${match.url}/followUp`} activeClassName="activeLead" className="stepper-bar  bg-success d-flex justify-content-center"><span>Follow_Up</span></NavLink>
        <NavLink to={`${match.url}/estimate`} activeClassName="activeLead" className="stepper-bar bg-warning d-flex justify-content-center"><span>Estimate</span></NavLink>
        <NavLink to={`${match.url}/invoice`} activeClassName="activeLead" className="stepper-bar bg-secondary d-flex justify-content-center"><span>Invoice</span></NavLink>
      </div>
      <Switch>
        <Route exact path={`${match.path}/`} component={NewLead} />
        <Route path={`${match.path}/followUp`} component={FollowUp} />
        <Route path={`${match.path}/estimate`} component={Estimate} />
        <Route path={`${match.path}/invoice`} component={Estimate} />
      </Switch>
    </Router>
  </div>
)
}

export default Home