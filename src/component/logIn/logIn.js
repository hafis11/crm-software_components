import React from 'react';
import './logIn.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import cross from '../../images/cross.svg';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser,clearLoginError} from '../../redux/action';


const axios = require("axios").default;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'admin',
            inputcolor: "#92d9a4",
            bgcolor: "#62c888",
            username: "",
            password: "",
            usertype: "admin",
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.showModal = this.showModal.bind(this);
    }
    adminlog = () => {
        this.setState({
            value: 'admin',
            inputcolor: "#92d9a4",
            bgcolor: "#62c888",
            usertype: "admin"
        })
    }

    salelog = () => {
        this.setState({
            value: 'sales',
            inputcolor: "#3b7fde",
            bgcolor: "#1a509b",
            usertype: "sales"
        })
    }

    financelog = () => {
        this.setState({
            value: 'Accounts',
            inputcolor: "#9261d1",
            bgcolor: "#4d2580",
            usertype: "accounts"
        })
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleModal(){
        this.props.dispatch(clearLoginError());
    }

    showModal() {
        $("#myModal").modal({backdrop:"static",show:true});
    }

    submitLogin() {
        //     this.props.history.push({pathname:`/${this.state.usertype}`,state:response.data});
        this.props.dispatch(loginUser(this.state.username,this.state.password,this.state.usertype));
    }

    componentDidUpdate(){
        if(this.props.isAuthenticated){
            this.props.history.push({pathname:`/${this.props.user.usertype}`,state:this.props.user});
        }
    }

    render() {
        return (
            <div className="log-main bg-white d-flex justify-content-center align-items-center">
                <div className="log-condainer d-flex flex-row bg-white">
                    {/* ---------------------Modal window--------------------------------------   */}
                    <div className="modal" id="myModal" role="dialog">
                        <div className="modal-dialog modal-dailog-centered">
                            <div className="modal-content">
                                <div className="modal-body d-flex flex-column justify-content-around align-items-center" style={{height:'45vh'}}>
                                        <img src={cross} class="cross-img"/>
                                        <div class="d-flex justify-content-center align-items-center flex-column">
                                        <h6>Bad credentials.</h6>
                                        <h6 class="mt-n2">Please login again!</h6>
                                        </div>
                                        <div type="button" className="btn btn-danger rounded-pill" style={{width:'7vw'}} data-dismiss="modal" onClick={this.handleModal} >Ok</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------Modal window--------------------------------------*/}
                    {
                        this.props.loginError? this.showModal() : <></>
                    }
                    {/* first half */}
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "50vw" }}>
                        <div>
                            <img src={require('../../images/logo.png')} className="login-logo" />
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <div className="btn btn-primary border-0 mr-sm-4 p-2 text-light rounded d-flex justify-content-center align-items-center" type='button' onClick={this.adminlog}><span>Admin</span></div>
                            <div className="btn btn-primary border-0 mr-sm-4  p-2 text-light rounded d-flex justify-content-center align-items-center" type='button' onClick={this.salelog}><span>Sales</span></div>
                            <div className="btn btn-primary border-0 mr-sm-4  p-2 text-light rounded d-flex justify-content-center align-items-center" type='button' onClick={this.financelog}><span>Account</span></div>
                        </div>  
                    </div>
                    {/* second half */}
                    <div className="log-secondhalf d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: this.state.bgcolor }}>
                        <h2 className="mb-sm-4 text-white text-capitalize" style={{ fontSize: "5vh" }}>{"Welcome back " + this.state.value}</h2>
                        <input type="text" className="log-input w-50 mb-4 p-3" style={{ backgroundColor: this.state.inputcolor }} name="name" placeholder="Email address" onChange={this.handleUsername} />
                        <input type="password" className="log-input w-50 mb-4 p-3" style={{ backgroundColor: this.state.inputcolor }} name="name" placeholder="Password" onChange={this.handlePassword} />
                        <div className="log-button d-flex justify-content-center align-items-center text-white font-weight-bold" type='button' onClick={this.submitLogin} ><span>LogIn</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      isLogingIn: state.auth.isLogingIn,
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user,
      loginError:state.auth.loginError
    }
  }

export default connect(mapStateToProps)(withRouter(Login));