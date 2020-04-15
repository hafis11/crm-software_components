import React from 'react'
import './emailTask.css'

class EmailTask extends React.Component{
    render(){
        return(
            <div class="my-container shadow-sm  d-flex flex-column rounded justify-content-around">
                <div class="my-fi-row d-flex flex-row justify-content-between">
                    <div class="overflow-hidden">
                    <div class="my-circle d-flex justify-content-center align-items-center text-primary ml-sm-n3 mt-sm-n3">
                        <span class="fa fa-envelope"/>
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
                <div class="my-sec-row d-flex flex-row align-items-center justify-content-around pb-sm-5">
                    <div class="my-date d-flex flex-column align-items-center">
                        <input class="mydateInput" type="date"/>
                        <span>Date</span>
                    </div>
                    <div class="my-time d-flex flex-column align-items-center">
                        <input class="mytimeInput" type="time"/>
                        <span>Time</span>
                    </div>
                </div>
                <div class="my-email d-flex justify-content-center">Select or Add new email</div>
                <div class="d-flex justify-content-center align-items-center pb-sm-3">
                    <select class="form-control form-control-sm w-75">
                        <option>mail 1</option>
                        <option>mail 2</option>
                        <option>mail 3</option>
                    </select>
                </div>
                <div class="my-button d-flex justify-content-center pb-sm-5">
                <div type="button" class="button1 bg-primary p-2 d-flex justify-content-center align-items-center rounded"><span>Schedule a Email</span></div>
                </div>
            </div>
        )
    }
}
export default EmailTask