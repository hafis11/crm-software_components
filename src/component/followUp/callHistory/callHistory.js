import React from 'react'
import '../callHistory/callHistory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

class CallHistory extends React.Component{
     render(){  
         return(        
             <div class="mt-2">
             <div class="shadow overflow-hidden d-flex flex-row justify-content-lg-around its-container">
                <div class="its-date  ml-sm-n5 mt-sm-n3">
                    <div class="its-time d-flex justify-content-lg-end align-items-lg-end">
                        <small class="text-light font-weight-bold mr-3">12 Feb 2020</small>
                    </div>
                </div>
                <div class="its-body d-flex align-items-center ">
                    <h3>Call successfully sent!</h3>
                </div>
                <div class="its-footer d-flex flex-column justify-content-lg-between">
                    <small class="its-name mr-1">Hafis Muhammed</small>

                    <div class="its-view d-flex flex-row align-items-center position-relative mb-1" data-toggle="modal" data-target="#ViewModal" type="button">
                        <div class="shadow its-circle d-flex justify-content-center align-items-center text-light position-absolute"><FontAwesomeIcon icon={faCog}/></div>
                        <div class="its-viewdiv shadow bg-light d-flex justify-content-end rounded"><small class="its-viewtext">View More</small></div>
                    </div>

                    <div class="modal fade" id="ViewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">More Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div class="modal-body">
                                Details
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
             </div>
             </div>
         )
     }
}
export default CallHistory