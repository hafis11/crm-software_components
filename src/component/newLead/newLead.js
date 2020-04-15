import React from 'react'
import './newLead.css'

export default class NewLead extends React.Component{
    render(){
        return(
            <div class="newlead-condainer mt-3 d-flex flex-column justify-content-around ">
                {/* section1 */}
                <div class="d-flex flex-row justify-content-around">
                <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mr-n4 mt-n4">
                        <span class="glyphicon glyphicon-triangle-top"style={{color:'#94feaa'}}></span>
                    </div>
                    <div class="name-condainer d-flex flex-column align-items-center justify-content-around">
                        <div class="name-tag d-flex flex-row justify-content-center align-items-center">
                            <div>
                            <img class="lead-profile rounded-circle ml-2" src="https://p16.muscdn.com/img/musically-maliva-obj/1637841601569797~c5_1080x1080.jpeg"></img>
                            </div>
                            <div class="d-flex flex-column ml-3">
                                <snap class="lead-name-text font-weight-bold">james Merced</snap>
                                <snap class="lead-name-text">kwik kopy printing</snap>
                            </div>
                        </div>
                        <div class="name-tag d-flex flex-column align-items-start text-dark justify-content-around">
                                <snap class="fa fa-envelope"><snap class="lead-contact ml-3">james@gmail.com</snap></snap>
                                <snap class="fa fa-phone"><snap class="lead-contact ml-3">555-555-555</snap></snap>
                                <snap class="fa fa-edge "><snap class="lead-contact ml-3">keikopy.com</snap></snap>
                        </div>
                    </div>
                </div>
                <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mr-n4 mt-n4">
                        <span class="glyphicon glyphicon-triangle-top"style={{color:'#99e9ff'}}></span>
                    </div>
                    <div class="name-condainer d-flex justify-content-around align-items-center flex-column">
                         <div>
                             <snap class="lead-info-head font-weight-bold">Lead Information</snap>
                         </div>
                         <div class="d-flex flex-column justify-content-around" style={{height:'18vh'}}>
                            <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                <snap class="lead-info-data">Source</snap>
                                <snap class="lead-info-data">web form</snap>
                            </div>
                            <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                <snap class="lead-info-data">Created by</snap>
                                <snap class="lead-info-data">Hafis</snap>
                            </div>
                            <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                <snap class="lead-info-data">Created on</snap>
                                <snap class="lead-info-data">12 Feb 2020</snap>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mr-n4 mt-n4">
                        <span class="glyphicon glyphicon-triangle-top"style={{color:'#c897fc'}}></span>
                    </div>
                    <div class="name-condainer d-flex flex-column justify-content-around align-items-center  ">
                        <div>
                            <snap class="lead-address-head font-weight-bold">Product Information</snap>
                        </div>
                        <div>
                            <div class="bg-primary p-2 rounded-pill">Product 1</div>
                        </div>
                    </div>
                </div>
                </div>
                {/* section2 */}
                <div class="d-flex flex-row justify-content-around">
                <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mr-n4 mt-n4">
                        <span class="glyphicon glyphicon-triangle-top"style={{color:'#ff9799'}}></span>
                    </div>
                    <div class="name-condainer d-flex justify-content-around align-items-center flex-column">
                         <div>
                             <snap class="lead-address-head font-weight-bold">Address Details</snap>
                         </div>
                         <div class="d-flex flex-column justify-content-around" style={{height:'18vh'}}>
                            <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                <snap class="lead-info-data">Street</snap>
                                <snap class="lead-info-data">wadi-al-luwami</snap>
                            </div>
                            <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                <snap class="lead-info-data">Emirate</snap>
                                <snap class="lead-info-data">dubai</snap>
                            </div>
                            <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                <snap class="lead-info-data">Zipcode</snap>
                                <snap class="lead-info-data">685588</snap>
                            </div>
                            <div class="lead-tag d-flex flex-row justify-content-between align-items-center">
                                <snap class="lead-info-data">City</snap>
                                <snap class="lead-info-data">Al-hail</snap>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mr-n4 mt-n4">
                        <span class="glyphicon glyphicon-triangle-top"style={{color:'#fff398'}}></span>
                    </div>
                    <div class="name-condainer d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <snap class="lead-remark font-weight-bold">Remark</snap>
                        </div>
                        <div>
                            <textarea class="lead-textarea border-0" placeholder="Remarks"></textarea>
                        </div>
                            <div type="button"class="add-button rounded bg-primary p-2 d-flex align-items-center justify-content-center"><snap>Add</snap></div>
                    </div>
                </div>
                <div class="newload-box pl-0 pr-0 col-3 rounded shadow">
                    <div class="d-flex justify-content-end mr-n4 mt-n4">
                        <span class="glyphicon glyphicon-triangle-top"style={{color:'#fec4aa'}}></span>
                    </div>
                    <div class="name-condainer d-flex flex-column justify-content-around align-items-center">
                         <div>
                             <snap class="lead-address-head font-weight-bold">Salesperson</snap>
                         </div>
                         <div>
                         <img class="lead-profile rounded-circle ml-2" src="https://p16.muscdn.com/img/musically-maliva-obj/1637841601569797~c5_1080x1080.jpeg"></img>
                         </div>
                            <div >
                            <select class="lead-selecter">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>  
                </div>
                </div>
            </div>
        )
    }
}