import React from 'react'
import '../callScheduleCard/callScheduleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenSquare ,faCalendarPlus ,faTrash} from '@fortawesome/free-solid-svg-icons'

class CallScheduleCard extends React.Component{
 render(){
     return(
        <div class="my-condainer shadow rounded mt-1 d-flex flex-row align-items-center justify-content-between">
            <div class="my-triangle d-flex position-relative align-items-center justify-content-center">
                <div class="my-textgroup position-absolute d-flex flex-column ml-sm-n5 text-light">
                    <snap class="my-text font-weight-bold">12:00PM</snap>
                    <snap class="my-text">Tue,Mar</snap>
                </div>
            </div>
            <div class="my-body d-flex flex-column align-items-center">
                <div class="my-texthead font-weight-bold">Outbound Call</div>
                <small class="my-name">Hafis Muhammed</small>
                <div class="my-options d-flex flex-row pt-sm-4 text-primary">
                    <div class="my-edit pr-lg-3"><FontAwesomeIcon icon={faPenSquare}/>Edit</div>
                    <div class="my-reassign"><FontAwesomeIcon icon={faCalendarPlus}/>Re-Assign</div>
                    <div class="my-delete pl-lg-3"><FontAwesomeIcon icon={faTrash}/>Delete</div>
                </div>
            </div>
            <div class="my-footer d-flex flex-column">
                <small class="my-menu">menu</small>
                <small class="my-end ">Added 4 days ago</small>
            </div>
        </div>
     )
 }
}
export default CallScheduleCard
