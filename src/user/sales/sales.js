import React from 'react';
import './sales.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SalesDashboard from '../../Screen/DashBoard/salesDashboard/salesDashboard';
import Lead from '../../Screen/lead&Invoice/Lead';
import Product from '../../Screen/Product/Product';
import Report from '../../Screen/Report/report';
// import {withRouter} from 'react-router-dom';

const axios = require("axios").default;

class Sales extends React.Component{

  render(){
      return(
        <Router>
        <div className="wrapper d-flex">
        <div className="sidebar bg-primary">
            <div className="sidebar-header d-flex justify-content-center align-items-center">
              <img src={require('../../images/companylogo.png')} class="logo"/>
            </div>
            <ul className="list-unstyled components d-flex flex-column align-items-center mt-5">
              <li className="sidebar-opt mb-4">
                  <Link className="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/`,state:this.props.location.state}}>
                      <i className="sidebar-option fa fa-tachometer" data-toggle="tooltip"data-placement="right" title="Dashboard"></i>
                  </Link>
              </li>
              <li className="sidebar-opt mb-4">
                  <Link className="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/lead`,state:this.props.location.state}}>
                      <i className="sidebar-option fa fa-leanpub"data-toggle="tooltip"data-placement="right" title="Lead"></i>
                  </Link>
              </li>
              <li className="sidebar-opt mb-4">
                  <Link className="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/product`,state:this.props.location.state}}>
                      <i className="sidebar-option fa fa-opencart"data-toggle="tooltip"data-placement="right" title="Product"></i>
                  </Link>
              </li>
              <li className="sidebar-opt mb-4">
                  <Link className="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/report`,state:this.props.location.state}}>
                      <i className="sidebar-option fa fa-file-text"data-toggle="tooltip"data-placement="right" title="Report"></i> 
                  </Link>
              </li>
            </ul>
        </div>  
          <div>
            <Switch>
              <Route exact path={`${this.props.match.path}/`} component={SalesDashboard} />
              <Route path={`${this.props.match.path}/lead`} component={Lead}/>
              <Route path={`${this.props.match.path}/product`} component={Product} />
              <Route path={`${this.props.match.path}/report`} component={Report} />
            </Switch>
          </div>
        </div>
      </Router>
      )
  }
}

export default Sales