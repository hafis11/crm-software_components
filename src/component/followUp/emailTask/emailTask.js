import React from 'react'
import '../emailTask/emailTask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

class EmailTask extends React.Component{
    render(){
        return(
            <div class="my-container shadow  d-flex flex-column rounded justify-content-around">
                <div class="my-fi-row d-flex flex-row justify-content-between">
                    <div class="overflow-hidden">
                    <div class="my-circle d-flex justify-content-center align-items-center text-primary ml-sm-n2 mt-sm-n2">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div></div>
                    <div class="mysettings pt-1 pr-1 dropdown">
                        <FontAwesomeIcon icon={faCog} data-toggle="dropdown"/>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <snap class="dropdown-item">option1</snap>
                            <snap class="dropdown-item">option2</snap>
                            <snap class="dropdown-item">option3</snap>
                        </div>
                    </div>
                </div>
                <div class="my-sec-row d-flex flex-row align-items-center justify-content-around pb-sm-5">
                    <div class="my-date d-flex flex-column align-items-center">
                        <input class="mydateInput" type="date"/>
                        <snap>Date</snap>
                    </div>
                    <div class="my-time d-flex flex-column align-items-center">
                        <input class="mytimeInput" type="time"/>
                        <snap>Time</snap>
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
                    <Button className="button">Sent E-mail</Button>
                </div>
            </div>
        )
    }
}
export default EmailTask