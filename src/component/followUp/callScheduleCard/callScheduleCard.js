import React from 'react'
import '../callScheduleCard/callScheduleCard.css'

class CallScheduleCard extends React.Component{
 render(){
     return(
        <div class="my-condainer shadow rounded mt-1 d-flex flex-row align-items-center justify-content-between">
            <div class="my-triangle d-flex position-relative align-items-center justify-content-center">
                <div class="my-textgroup position-absolute text-light d-flex flex-column justify-content-center align-items-center">
                    <span class="my-text font-weight-bold">12:00PM</span>
                    <small class="font-weight-bold">Tue,Mar</small>
                </div>
            </div>
            <div class="my-body d-flex flex-column align-items-center">
                <div class="my-texthead font-weight-bold">Outbound Call</div>
                <small class="my-name">Hafis Muhammed</small>
                <div class="my-options d-flex flex-row pt-sm-4 text-primary">
                    <div type="button" class="my-edit pr-lg-3"><img src={require('../../../images/plan.png')} class="img-size"/>Edit</div>
                    <div type="button" class="my-reassign"><img src={require('../../../images/call.png')} class="img-size"/>Done</div>
                    <div type="button" class="my-delete pl-lg-3"><img src={require('../../../images/delete.png')} class="img-size"/>Delete</div>
                </div>
            </div>
            <div class="my-footer d-flex flex-column">
            <div class="my-menu text-primary d-flex justify-content-end mr-sm-2 mt-sm-2 dropdown">
                        <span class="fa fa-chevron-circle-down" data-toggle="dropdown"/>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span type="button" class="dropdown-item">option1</span>
                            <span type="button" class="dropdown-item">option2</span>
                            <span type="button" class="dropdown-item">option3</span>
                        </div>
                    </div>
                <small class="my-end ">Added 4 days ago</small>
            </div>
        </div>
     )
 }
}
export default CallScheduleCard