import React from 'react'
import './callHistory.css'

class CallHistory extends React.Component{
     render(){  
         return(        
            <div class="condent-box mt-1 shadow">
            <div class="overflow-hidden d-flex flex-row justify-content-lg-around its-container">
               <div class="its-date  ml-sm-n5 mt-sm-n3">
                   <div class="its-time d-flex justify-content-lg-center ml-5 align-items-lg-end">
                       <small class="text-light font-weight-bold mr-3">12 Feb 2020</small>
                   </div>
               </div>
               <div class="its-body d-flex align-items-center ">
                   <h3>Call successfully made</h3>
               </div>
               <div class="its-footer d-flex flex-column justify-content-lg-between">
                   <small class="its-name mr-3">Hafis Muhammed</small>
               </div>
            </div>
            </div>
         )
     }
}
export default CallHistory