import React from 'react'
import '../callTask/callTask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faCog} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

class CallTask extends React.Component{
    render(){
        return(
            <div class="shadow mycontainer d-flex flex-column rounded justify-content-around">
                <div class="myfi-row  d-flex flex-row justify-content-between">
                    <div class="overflow-hidden">
                    <div class="mycircle d-flex justify-content-center align-items-center text-primary ml-sm-n2 mt-sm-n2">
                        <FontAwesomeIcon icon={faPhone}/>
                    </div></div>
                    <div class="mysettings pt-1 pr-1 dropdown">
                        <FontAwesomeIcon icon={faCog} data-toggle="dropdown"/>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span class="dropdown-item">option1</span>
                            <span class="dropdown-item">option2</span>
                            <span class="dropdown-item">option3</span>
                        </div>
                    </div>
                </div>
                <div class="mysec-row d-flex flex-row align-items-center justify-content-around pb-sm-5">
                    <div class="mydate d-flex flex-column align-items-center">
                        <input class="mydateInput" type="date"/>
                        <span>Date</span>
                    </div>
                    <div class="mytime d-flex flex-column align-items-center">
                    <input class="mytimeInput" type="time"/>
                        <span>Time</span>
                    </div>
                </div>
                <div class="mybutton d-flex justify-content-center pb-sm-5">
                    <Button class="button">Schedule a Call</Button>
                </div>
            </div>
        )
    }
}
export default CallTask