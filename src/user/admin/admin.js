import React from 'react';
import './admin.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DashBoard from '../../Screen/DashBoard/adminDashboard/dashBoard'
import Lead from '../../Screen/lead&Invoice/Lead'
import Product from '../../Screen/Product/Product'
import Report from '../../Screen/Report/report'
import SalesTable from './salesTable';

class Home extends React.Component {

  render() {
    return (
      <Router>
        <div class="wrapper d-flex">
          <div class="sidebar bg-primary">
            <div class="sidebar-header d-flex justify-content-center align-items-center">
              <img src={require('../../images/companylogo.png')} class="logo" />
            </div>
            <ul class="list-unstyled components d-flex flex-column align-items-center mt-5">
              <li class="sidebar-opt mb-4">
                <Link class="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/`,state:this.props.location.state}}>
                  <i class="sidebar-option fa fa-tachometer" data-toggle="tooltip" data-placement="right" title="Dashboard"></i>
                </Link>
              </li>
              <li class="sidebar-opt mb-4">
                <Link class="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/sales`,state:this.props.location.state}}>
                  <i class="sidebar-option fa fa-leanpub" data-toggle="tooltip" data-placement="right" title="Lead"></i>
                </Link>
              </li>
              <li class="sidebar-opt mb-4">
                <Link class="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/product`,state:this.props.location.state}}>
                  <i class="sidebar-option fa fa-opencart" data-toggle="tooltip" data-placement="right" title="Product"></i>
                </Link>
              </li>
              <li class="sidebar-opt mb-4">
                <Link class="sidebarlink nav-link" to={{pathname:`${this.props.match.url}/report`,state:this.props.location.state}}>
                  <i class="sidebar-option fa fa-file-text" data-toggle="tooltip" data-placement="right" title="Report"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route exact path={`${this.props.match.path}/`} component={DashBoard} />
              <Route exact path={`${this.props.match.path}/sales`} component={SalesTable} />
              <Route exact path={`${this.props.match.path}/sales/lead`} component={Lead} />
              <Route path={`${this.props.match.path}/product`} component={Product} />
              <Route path={`${this.props.match.path}/report`} component={Report} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default Home