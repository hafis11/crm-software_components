import React from 'react'
import '../callHistory/callHistory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

class EmailHistory extends React.Component{
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
                    <h3>E-mail successfully sent!</h3>
                </div>
                <div class="its-footer d-flex flex-column justify-content-lg-between">
                    <small class="its-name mr-1">Hafis Muhammed</small>
                    <snap class="its-view d-flex flex-row align-items-center position-relative mb-1">
                        <div class="shadow its-circle d-flex justify-content-center align-items-center text-light position-absolute"><FontAwesomeIcon icon={faCog}/></div>
                        <div class="its-viewdiv shadow bg-light d-flex justify-content-end rounded"><small class="its-viewtext">View More</small></div>
                    </snap>
                </div>
             </div>
             </div>
         )
     }
}
export default EmailHistory