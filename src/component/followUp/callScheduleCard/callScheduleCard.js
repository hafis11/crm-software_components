import React from 'react'
import '../callScheduleCard/callScheduleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenSquare ,faTrash, faPaperPlane, faCaretSquareDown} from '@fortawesome/free-solid-svg-icons'

class CallScheduleCard extends React.Component{
 render(){
     return(
        <div class="my-condainer shadow rounded mt-1 d-flex flex-row align-items-center justify-content-between">
            <div class="my-triangle d-flex position-relative align-items-center justify-content-center">
                <div class="my-textgroup position-absolute d-flex flex-column ml-sm-n5 text-light">
                    <span class="my-text font-weight-bold">12:00PM</span>
                    <span class="my-text">Tue,Mar</span>
                </div>
            </div>
            <div class="my-body d-flex flex-column align-items-center">
                <div class="my-texthead font-weight-bold">Outbound Call</div>
                <small class="my-name">Hafis Muhammed</small>
                <div class="my-options d-flex flex-row pt-sm-4 text-primary">
                    <div class="my-edit pr-lg-3"><FontAwesomeIcon icon={faPenSquare}/>Edit</div>
                    <div class="my-reassign"><FontAwesomeIcon icon={faPaperPlane}/>Sent Now</div>
                    <div class="my-delete pl-lg-3"><FontAwesomeIcon icon={faTrash}/>Delete</div>
                </div>
            </div>
            <div class="my-footer d-flex flex-column">
            <div class="my-menu text-primary d-flex justify-content-end mr-sm-1 mt-sm-1 dropdown">
                        <FontAwesomeIcon icon={faCaretSquareDown} data-toggle="dropdown"/>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span class="dropdown-item">option1</span>
                            <span class="dropdown-item">option2</span>
                            <span class="dropdown-item">option3</span>
                        </div>
                    </div>
                <small class="my-end ">Added 4 days ago</small>
            </div>
        </div>
     )
 }
}
export default CallScheduleCard