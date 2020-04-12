import React from 'react'
import './logIn.css'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 'admin',
            inputcolor:"#92d9a4",
            bgcolor:"#62c888"
        };
    }
    adminlog=()=>{
        this.setState({
            value:'admin',
            inputcolor:"#92d9a4",
            bgcolor:"#62c888"
        })
    }
    salelog=()=>{
        this.setState({
            value:'sales',
            inputcolor:"#3b7fde",
            bgcolor:"#1a509b"
        })
    }
    financelog=()=>{
        this.setState({
            value:'finance',
            inputcolor:"#9261d1",
            bgcolor:"#4d2580"
        })  
    }


    render(){
        return(
        <div class="log-main bg-white d-flex justify-content-center align-items-center">
            <div class="log-condainer d-flex flex-row bg-white">
                {/* first half */}
                <div class="d-flex flex-column justify-content-center align-items-center" style={{width:"50vw"}}>
                    <div>
                        <img src="companylogo.png"class="logo"/>
                    </div>
                    <div class="d-flex flex-row mt-5">
                        <button class="log-butt mr-sm-4"type='button'onClick={this.adminlog}><snap>Admin</snap></button>
                        <button class="log-butt mr-sm-4"type='button'onClick={this.salelog}><snap>Sales</snap></button>
                        <button class="log-butt mr-sm-4"type='button'onClick={this.financelog}><snap>Account</snap></button>
                    </div>
                </div>
                {/* second half */}
                <div class="log-secondhalf d-flex flex-column justify-content-center align-items-center"style={{backgroundColor: this.state.bgcolor}}>
                    <h2 class="mb-sm-4 text-white" style={{fontSize:"5vh"}}>Welcome back</h2> 
                    <input type="text"class="log-input w-50 mb-4 p-3" style={{backgroundColor: this.state.inputcolor}}name="name" placeholder="Email address"/>
                    <input type="password"class="log-input w-50 mb-4 p-3"style={{backgroundColor: this.state.inputcolor}}name="name" placeholder="Password"/>
                    <div class="log-button d-flex justify-content-center align-items-center text-white font-weight-bold"type='button'><snap>logIn</snap></div>
                </div>
            </div>
        </div>
        )
    }
}
export default Login