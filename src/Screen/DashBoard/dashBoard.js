import React from 'react'
import './dashboard.css'
import TopBar from '../../component/TopBar/TopBar'
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

class DashBoard extends React.Component{
    render(){
        return(
            <div class="bg-light" style={{height:'100vh',width:'94vw'}}>
                <TopBar></TopBar>
                <div class="dashboard-tab container-fluid">
                    {/* section1 */}
                    <div class="overall-box d-flex flex-row mt-4 justify-content-center">
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">New Lead</span>
                                <span class="box-text">22</span>
                            </div>
                            <div>
                                <img src="launch.png" class="image-size"/>
                            </div>
                        </div>
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">Follow_Up</span>
                                <span class="box-text">10</span>
                            </div>
                            <div>
                                <img src="follow.png" class="image-size"/>
                            </div>
                        </div>
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">Estimate</span>
                                <span class="box-text">7</span>
                            </div>
                            <div>
                                <img src="estimate.png" class="image-size"/>
                            </div>
                        </div>
                        <div class="condent1 col-3 ml-2 rounded d-flex flex-row justify-content-between align-items-center shadow">
                            <div class="d-flex flex-column">
                                <span class="box-text">Invoice</span>
                                <span class="box-text">4</span>
                            </div>
                            <div>
                                <img src="bill.png" class="image-size"/>
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
                                    <img src="bank.png" class="image-size"/>
                                </div>
                            </div>
                            <div class="condent1 total-box mt-3 rounded d-flex flex-column justify-content-around shadow">
                                <div class="d-flex flex-row justify-content-around align-items-center mt-2">
                                <div>
                                    <img src="handshake.png" class="image-size"/>
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
                                    <img src="package.png" class="image-size"/>
                                </div>
                                <div class="d-flex flex-column">
                                    <span class="total-text">78</span>
                                    <span class="total-text">Total Product</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="condent1 col-5 ml-2 rounded d-flex flex-column align-items-center justify-content-around shadow">
                            <div class="d-flex justify-content-end container-fluid mb-n5">
                                <select class="input-bar">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                            <Doughnut
                                data={state}
                                options={{
                                    title:{
                                    display:true,
                                    text:'Salesman Lead details',
                                    fontSize:20
                                    },
                                    legend:{
                                    display:true,
                                    position:'right'
                                    }
                                }}
                                />  
                        </div>
                        <div class="condent1 activity-tab col-4 ml-2 rounded shadow">
                            {/* border head */}
                            <div class="activity-head d-flex flex-row p-2">
                                <div>
                                    <i class="fa fa-puzzle-piece"/>
                                </div>
                                <div class="d-flex justify-content-center container-fluid">
                                    <span>Activitys</span>
                                </div>
                            </div>
                            {/* border-head-close */}
                        </div>
                    </div>
                    {/* section3 */}
                    <div class="source-box d-flex flex-row mt-4 justify-content-center mt-4">
                        <div class="condent1 col-4  ml-2 rounded d-flex flex-column justify-content-center shadow">
                            <div class="d-flex flex-row justify-content-between mb-1 align-items-center">
                                <img src="twitter.png" class="image-size"/>
                                <span class="source-head-text font-weight-bold">Website</span>
                            </div>
                            <div>
                                <hr></hr>
                            </div>
                            <div class="d-flex flex-row mt-1 justify-content-between">
                                <div class="source-data-box col-6 d-flex justify-content-between align-items-center">
                                    <span class="source-data">Opportunity</span>
                                    <span class="source-data font-weight-bold">22</span>
                                </div>
                                <div class="col-6 d-flex justify-content-between align-items-center">
                                    <span class="source-data">Deal</span>
                                    <span class="source-data font-weight-bold">10</span>
                                </div>
                            </div>
                        </div>
                        <div class="condent1 col-4  ml-2 rounded d-flex flex-column justify-content-center shadow">
                            <div class="d-flex flex-row justify-content-between mb-1 align-items-center">
                                <img src="conversation.png" class="image-size"/>
                                <span class="source-head-text font-weight-bold">Contact</span>
                            </div>
                            <div>
                                <hr></hr>
                            </div>
                            <div class="d-flex flex-row mt-1 justify-content-between">
                                <div class="source-data-box col-6 d-flex justify-content-between align-items-center">
                                    <span class="source-data">Opportunity</span>
                                    <span class="source-data font-weight-bold">30</span>
                                </div>
                                <div class="col-6 d-flex justify-content-between align-items-center">
                                    <span class="source-data">Deal</span>
                                    <span class="source-data font-weight-bold">25</span>
                                </div>
                            </div>
                        </div>
                        <div class="condent1 col-4  ml-2 rounded d-flex flex-column justify-content-center shadow">
                            <div class="d-flex flex-row justify-content-between mb-1 align-items-center">
                                <img src="businessman.png" class="image-size"/>
                                <span class="source-head-text font-weight-bold">Other Source</span>
                            </div>
                            <div>
                                <hr></hr>
                            </div>
                            <div class="d-flex flex-row mt-1 justify-content-between">
                                <div class="source-data-box col-6 d-flex justify-content-between align-items-center">
                                    <span class="source-data">Opportunity</span>
                                    <span class="source-data font-weight-bold">10</span>
                                </div>
                                <div class="col-6 d-flex justify-content-between align-items-center">
                                    <span class="source-data">Deal</span>
                                    <span class="source-data font-weight-bold">5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
export default DashBoard