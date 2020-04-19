import React, { Component } from 'react';
import TopBar from '../../component/TopBar/TopBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const axios = require("axios").default;

class SalesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/admin/sales`, {
            withCredentials: true
        }).then(response => {
            let idusers = this.props.idusers;
            this.setState({
                list: response.data.map(sales => 
                    <tr key={sales.idsales}>
                        <td>{`${sales.fname} ${sales.lname}`}</td>
                        <td>{sales.email}</td>
                        <td>{sales.phone}</td>
                        <td><Link className="fa fa-eye text-success" to={{pathname:`${this.props.match.url}/lead`,state:{idusers:idusers,idsales:`${sales.idsales}`,usertype:"sales"}}} ></Link></td>
                    </tr>
                    )
            });
        }).catch(response => {
            alert("Failed to fetch Salesman");
        })
    }

    onClickHandler(sid){
        // let users={idusers:this.props.idusers,idsales:sid,usertype:"sales"}
        // this.props.history.push()
        // alert(`You clicked the ${sid} sales person`);
    }

    render() {
        return (
            <div class="bg-light" style={{ width: '94vw' }}>
                <TopBar></TopBar>
                <div class="head d-flex flex-row justify-content-between align-items-center">
                    <div class="head-text pl-5">Lead & Invoice</div>
                    {/* <LeadAdder></LeadAdder> */}
                </div>
                <div class="lead-table">
                    <table class="table table-hover table">
                        <thead>
                            <tr>
                                <th scope="col">Salesman</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.list}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        idusers:state.auth.user.idusers
    }
}

export default connect(mapStateToProps)(withRouter(SalesTable));