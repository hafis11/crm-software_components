import React from 'react'
import '../salesDashboard/salesDashboard.css'
import TopBar from '../../../component/TopBar/TopBar'

class SalesDashboard extends React.Component{
    
    render(){
        return(
            <div className="bg-light" style={{height:'100vh',width:'94vw'}}>
                <TopBar></TopBar>
                <div className="dashboard-tab1 container-fluid">
                    {/* section1 */}
                    <div className="overall-box d-flex flex-row mt-2 justify-content-center">
                        <div className="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div className="d-flex flex-column">
                                <span className="box-text">New Lead</span>
                                <span className="box-text">22</span>
                            </div>
                            <div>
                                <img src={require('../../../images/launch.png')} className="image-size"/>
                            </div>
                        </div>
                        <div className="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div className="d-flex flex-column">
                                <span className="box-text">Follow_Up</span>
                                <span className="box-text">10</span>
                            </div>
                            <div>
                                <img src={require('../../../images/follow.png')} className="image-size"/>
                            </div>
                        </div>
                        <div className="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div className="d-flex flex-column">
                                <span className="box-text">Estimate</span>
                                <span className="box-text">7</span>
                            </div>
                            <div>
                                <img src={require('../../../images/estimate.png')} className="image-size"/>
                            </div>
                        </div>
                        <div className="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div className="d-flex flex-column">
                                <span className="box-text">Invoice</span>
                                <span className="box-text">4</span>
                            </div>
                            <div>
                                <img src={require('../../../images/bill.png')} className="image-size"/>
                            </div>
                        </div>
                    </div>
                    <div className="activity-tab d-flex flex-row mt-2 justify-content-center">
                        <div className="col-3 ml-2 rounded d-flex flex-column align-items-center">
                            <div className="condent1 total-pro-box rounded d-flex flex-row justify-content-between align-items-center shadow">
                                <div className="d-flex flex-column ml-5">
                                    <span className="box-text font-weight-bold">Total Profit</span>
                                    <span className="box-text">$300</span>
                                </div>
                                <div className="mr-5">
                                    <img src={require('../../../images/bank.png')} className="image-size"/>
                                </div>
                            </div>
                            <div className="condent1 total-box mt-2 rounded d-flex flex-column justify-content-around shadow">
                                <div className="d-flex flex-row justify-content-around align-items-center mt-2">
                                <div>
                                    <img src={require('../../../images/handshake.png')} className="image-size"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="total-text">50</span>
                                    <span className="total-text">Total Deals</span>
                                </div>
                                </div>
                                <div>
                                    <hr></hr>
                                </div>
                                <div className="d-flex flex-row justify-content-around align-items-center mb-2">
                                <div>
                                    <img src={require('../../../images/package.png')} className="image-size"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="total-text">78</span>
                                    <span className="total-text">Total Product</span>
                                </div>
                                </div>
                            </div>
                            <div className="condent1 total-pro-box rounded mt-2 d-flex flex-row justify-content-between align-items-center shadow">
                                <div className="d-flex flex-column ml-5">
                                    <span className="box-text font-weight-bold">Lost Deals</span>
                                    <span className="box-text text-danger">12</span>
                                </div>
                                <div className="mr-5">
                                    <img src={require('../../../images/lost.png')} className="image-size"/>
                                </div>
                            </div>
                        </div>
                        <div className="condent1 activity-tab col-9 ml-2 rounded shadow">
                            {/* border head */}
                            <div className="activity-head d-flex flex-row p-2">
                                <div>
                                    <i className="fa fa-puzzle-piece"/>
                                </div>
                                <div className="d-flex justify-content-center container-fluid">
                                    <span>Activities</span>
                                </div>
                            </div>
                            {/* border-head-close */}
                            {/* activity-tab */}
                            <div class="activity-list-tab">
                            <span className="dropdown-item items-action d-flex justify-content-around align-items-center bg-primary rounded mt-1 shadow">
                            <div>
                                <div className="icon-circle bg-success rounded-circle d-flex align-items-center justify-content-center">
                                <i className="fa fa-eercast "></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2020</div>
                                <span className="alert-head-activity font-weight-bold">OutBound E mail</span>
                            </div>
                            <div>
                                <snap>12:30</snap>
                            </div>
                            </span>
                            {/* ************************************************************** */}
                            <span className="dropdown-item items-action d-flex justify-content-around align-items-center bg-primary rounded mt-1 shadow">
                            <div>
                                <div className="icon-circle bg-success rounded-circle d-flex align-items-center justify-content-center">
                                <i className="fa fa-eercast "></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2020</div>
                                <span className="alert-head-activity font-weight-bold">OutBound Call</span>
                            </div>
                            <div>
                                <snap>12:30</snap>
                            </div>
                            </span>
                            {/* activity-tab-closed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
export default SalesDashboard