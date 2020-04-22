import React from 'react';
import './logIn.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser,clearLoginError} from '../../redux/action';


const axios = require("axios").default;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'admin',
            inputcolor: "#50aaaf",
            bgcolor: 'linear-gradient(135deg, rgba(100,179,183,1) 0%, rgba(104,182,185,1) 40%, rgba(162,218,219,1) 86%)',
            position:"row",
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
        if(this.state.value === 'admin'){
            $("#myswapping").modal({show:true});
        }else{
            this.setState({
                value: 'admin',
                inputcolor: "#50aaaf",
                bgcolor: 'linear-gradient(135deg, rgba(100,179,183,1) 0%, rgba(104,182,185,1) 40%, rgba(162,218,219,1) 86%)',
                usertype: "admin",
            })
            if(this.state.position === 'row'){
                this.setState({
                    position:"row-reverse"
                })
            }else{
                this.setState({
                    position:"row"
                })
            }
            console.log(this.state.position);
        }
        
    }
    

    salelog = () => {
        if(this.state.value === 'sales'){
            $("#myswapping").modal({show:true});
        }else{
            this.setState({
                value: 'sales',
                inputcolor: "#3b7fde",
                bgcolor: 'linear-gradient(240deg, rgba(26,80,155,1) 0%, rgba(126,170,231,1) 100%)',
                usertype: "sales",
            })
            if(this.state.position === 'row'){
                this.setState({
                    position:"row-reverse"
                })
            }else{
                this.setState({
                    position:"row"
                })
            }
            console.log(this.state.position);
        }
        
    }

    financelog = () => {
        if(this.state.value === 'Accounts'){
            $("#myswapping").modal({show:true});
        }else{
            this.setState({
                value: 'Account',
                inputcolor: "#9261d1",
                bgcolor: 'linear-gradient(138deg, rgba(77,37,128,1) 0%, rgba(140,98,193,1) 100%)',
                usertype: "accounts",
            })
            if(this.state.position === 'row'){
                this.setState({
                    position:"row-reverse"
                })
            }else{
                this.setState({
                    position:"row"
                })
            }
            console.log(this.state.position);
        }
        
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
                <div className="log-condainer bg-white" style={{ flexDirection:this.state.position,display:'flex' }}>
                    {/* ---------------------login-error-Modal window--------------------------------------   */}
                    <div className="modal" id="myModal" role="dialog">
                        <div className="modal-dialog modal-dailog-centered">
                            <div className="modal-content rounded-pill col-8">
                                <div className="modal-body d-flex flex-row justify-content-between align-items-center ml-n4" style={{height:'10vh'}}>
                                        <img src={require('../../images/close.svg')} class="cross-img"/>
                                        <div class="d-flex justify-content-center align-items-start flex-column">
                                        <small class="mb-0">Sorry.</small>
                                        <small class="mb-0">Bad credentials.</small>
                                        </div>
                                        {/* <div type="button"  style={{width:'7vw'}} data-dismiss="modal" onClick={this.handleModal} >Retry</div> */}
                                        <small type="button" class="log-error-retry p-3 mr-n3" data-dismiss="modal" onClick={this.handleModal}>Retry</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------login-error-Modal window--------------------------------------*/}
                    {
                        this.props.loginError? this.showModal() : <></>
                    }
                    {/* ---------------------swapping-error-Modal window--------------------------------------   */}
                    <div className="modal" id="myswapping" role="dialog">
                        <div className="modal-dialog modal-dailog-centered">
                            <div className="modal-content">
                                <div className="modal-body d-flex flex-row justify-content-around align-items-center" style={{height:'20vh'}}>
                                        <img src={require('../../images/swapping-error.svg')} class="cross-img"/>
                                        <h5 class="mt-n2 mb-0">Already selected!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------swapping-error-Modal window--------------------------------------*/}
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
                    <div className="log-secondhalf d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: this.state.bgcolor }}>
                        <div className="d-flex flex-column align-items-start">
                        <div className="d-flex flex-column align-items-start mb-5">
                        <h2 className="text-white text-capitalize mb-0" style={{ fontSize: "5vh",fontWeight:'bold' }}>Welcome back!</h2>
                        <h2 className="text-white text-capitalize mb-0" style={{ fontSize: "2vh" }}>{'Login as '+ this.state.value +' User'}</h2>
                        </div>
                        <input type="text" className="log-input mb-4 p-3" style={{ backgroundColor: this.state.inputcolor }} name="name" placeholder="Email address" onChange={this.handleUsername} />
                        <input type="password" className="log-input  mb-4 p-3" style={{ backgroundColor: this.state.inputcolor }} name="name" placeholder="Password" onChange={this.handlePassword} />
                        </div>
                        <div className="log-button d-flex justify-content-center align-items-center text-white font-weight-bold" type='button' onClick={this.submitLogin} ><span>Continue</span><i class="fa fa-arrow-right ml-1"/></div>
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