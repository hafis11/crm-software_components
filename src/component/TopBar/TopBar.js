import React from 'react'
import './TopBar.css';
import $ from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {withRouter} from 'react-router-dom';
const axios = require("axios").default;

class TopBar extends React.Component{
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    axios.get("http://localhost:3001/logout",{withCredentials:true}).then(response=>{
      console.log(response.status);
      if(response.status==200){
        this.props.history.push("/");
      }
    }).catch(response=>{
      console.log(response);
    })
  }
    render(){
        return(
        <div className="navbar shadow navbar-static-top mb-0">
          
          <div className="nav-item dropdown no-arrow mx-1 col-10 ml-5 d-flex justify-content-end">
              <span className="nav-link border-right dropdown-toggle" id="alertsDropdown" role="button" data-toggle="dropdown">
                <span className="notif--icon fa fa-bell"></span>
              </span>

              <div className="dropdown-list list dropdown-menu dropdown-menu-right shadow">
                <h5 className="dropdown-header dropdown-head-text bg-primary text-light d-flex align-items-center">
                   Notification
                </h5>
                <span className="dropdown-item items d-flex align-items-center">
                  <div className="mr-4">
                    <div className="icon-circle bg-warning rounded-circle d-flex align-items-center justify-content-center">
                      <i className="fa fa-bell"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2020</div>
                    <span className="alert-head font-weight-bold">james Merced's estimate approved!</span>
                  </div>
                </span>
                
              </div>
            </div>
          
          <div className="nav-item dropdown no-arrow">
            <div className="nav-link d-flex align-items-center dropdown-toggle mr-3" id="dropdownMenuButton" data-toggle="dropdown">
                <span className="name-profile">Hafis</span>
                <img className="img-profile rounded-circle ml-2" src="https://p16.muscdn.com/img/musically-maliva-obj/1637841601569797~c5_1080x1080.jpeg"></img>
            </div>
            <div className="dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={this.props.ProfleView} >Profile</a>
                <a className="dropdown-item" onClick={this.logout} >Logout</a>
            </div>
          </div>    
        </div>
        )
    }
}
export default withRouter(TopBar);