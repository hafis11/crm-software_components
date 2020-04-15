import React from 'react'
import './callTask.css'

class CallTask extends React.Component{
    render(){
        return(
            <div class="mycontainer d-flex flex-column rounded justify-content-around shadow-sm">
                <div class="myfi-row  d-flex flex-row justify-content-between">
                    <div class="overflow-hidden">
                    <div class="mycircle d-flex justify-content-center align-items-center text-primary ml-sm-n3 mt-sm-n3">
                        <span class="fa fa-phone"></span>
                    </div></div>
                    <div class="mysettings pt-1 pr-2 dropdown">
                        <span class="fa fa-cog text-primary" data-toggle="dropdown"/>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span type="button" class="dropdown-item">option1</span>
                            <span type="button" class="dropdown-item">option2</span>
                            <span type="button" class="dropdown-item">option3</span>
                        </div>
                    </div>
                </div>
                <div class="mysec-row d-flex flex-row align-items-center justify-content-around pb-sm-5">
                    <div class="mydate d-flex flex-column align-items-center">
                        <input class="mydateInput" type="date"/>
                        <span>Date</span>
                    </div>
                    <div class="my-time d-flex flex-column align-items-center">
                        <input class="mytimeInput" type="time"/>
                        <span>Time</span>
                    </div>
                </div>
                <div class="mybutton d-flex justify-content-center pb-sm-5">
                    <div type="button" class="button1 bg-primary p-2 d-flex justify-content-center align-items-center rounded"><span>Schedule a Call</span></div>
                </div>
            </div>
        )
    }
}
export default CallTask