import React from 'react'
import './salesDashboard.css'
import { Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['New Lead', 'Follow_Up', 'Estimate',
             'Invoice', 'Lost'],
    datasets: [
      {
        backgroundColor: [
          '#fe6383',
          '#ff9f40',
          '#ffcc56',
          '#4ac0c0',
          '#36a2eb'
        ],
        hoverBackgroundColor: [
        '#fe0134',
        '#ff8000',
        '#ffb300',
        '#3caaaa',
        '#1794e8'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

class SalesDashboard extends React.Component{
    render(){
        return(
            <div class="bg-light" style={{width:'94vw'}}>
                <div class="dashboard-tab container-fluid">
                    {/* section1 */}
                    <div class="overall-box d-flex flex-row mt-4 justify-content-center">
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">New Lead</span>
                                <span class="box-text">22</span>
                            </div>
                            <div>
                                <img src={require('../../../images/launch.png')} class="image-size"/>
                            </div>
                        </div>
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">Follow_Up</span>
                                <span class="box-text">10</span>
                            </div>
                            <div>
                                <img src={require('../../../images/follow.png')} class="image-size"/>
                            </div>
                        </div>
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">Estimate</span>
                                <span class="box-text">7</span>
                            </div>
                            <div>
                                <img src={require('../../../images/estimate.png')} class="image-size"/>
                            </div>
                        </div>
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">Invoice</span>
                                <span class="box-text">4</span>
                            </div>
                            <div>
                                <img src={require('../../../images/bill.png')} class="image-size"/>
                            </div>
                        </div>
                    </div>
                    {/* section2 */}
                    <div class="activity-tab d-flex flex-row mt-4 justify-content-center">
                        <div class="col-3 ml-2 rounded d-flex flex-column align-items-center">
                            <div class="condent1 total-pro-box rounded d-flex flex-row justify-content-between align-items-center shadow">
                                <div class="d-flex flex-column ml-5">
                                    <span class="box-text font-weight-bold">Total Profit</span>
                                    <span class="box-text">$300</span>
                                </div>
                                <div class="mr-5">
                                    <img src={require('../../../images/bank.png')} class="image-size"/>
                                </div>
                            </div>
                            <div class="condent1 total-box mt-2 rounded d-flex flex-column justify-content-around shadow">
                                <div class="d-flex flex-row justify-content-around align-items-center mt-2">
                                <div>
                                    <img src={require('../../../images/handshake.png')} class="image-size"/>
                                </div>
                                <div class="d-flex flex-column">
                                    <span class="total-text">50</span>
                                    <span class="total-text">Total Deals</span>
                                </div>
                                </div>
                                <div>
                                    <hr></hr>
                                </div>
                                <div class="d-flex flex-row justify-content-around align-items-center mb-2">
                                <div>
                                    <img src={require('../../../images/package.png')} class="image-size"/>
                                </div>
                                <div class="d-flex flex-column">
                                    <span class="total-text">78</span>
                                    <span class="total-text">Total Product</span>
                                </div>
                                </div>
                            </div>
                            <div class="condent1 total-pro-box rounded mt-2 d-flex flex-row justify-content-between align-items-center shadow">
                                <div class="d-flex flex-column ml-5">
                                    <span class="box-text font-weight-bold">Lost Deals</span>
                                    <span class="box-text text-danger">12</span>
                                </div>
                                <div class="mr-5">
                                    <img src={require('../../../images/lost.png')} class="image-size"/>
                                </div>
                            </div>
                        </div>
                        <div class="condent1 activity-tab col-9 ml-2 rounded shadow">
                            {/* border head */}
                            <div class="activity-head d-flex flex-row p-2">
                                <div>
                                    <i class="fa fa-puzzle-piece"/>
                                </div>
                                <div class="d-flex justify-content-center container-fluid">
                                    <span>Activities</span>
                                </div>
                            </div>
                            {/* border-head-close */} 
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
export default SalesDashboard