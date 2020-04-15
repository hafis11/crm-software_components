import React from 'react'
import './followUp.css'
import CallScheduleCard from './callScheduleCard/callScheduleCard'
import EmailScheduleCard from './emailScheduleCard/emailScheduleCard'
import CallTask from './callTask/callTask'
import EmailTask from './emailTask/emailTask'
import CallHistory from './callHistory/callHistory'
import EnailHistory from './emailHistory/emailHistory'


export default class FollowUp extends React.Component{
    render(){
        return(
            <div class="condainer d-flex flex-row mt-4">
                <div class="section col-4"> 
                    <div class="sticky-bar position-sticky shadow d-flex justify-content-center align-items-center">
                        <span class="text-primary font-weight-bold">Activitys</span>
                    </div>
                    <CallScheduleCard></CallScheduleCard>
                    <EmailScheduleCard></EmailScheduleCard>
                </div>
                <div class="col-4 d-flex flex-column">
                <div class="sticky-bar position-sticky shadow d-flex justify-content-center align-items-center">
                        <span class="text-primary font-weight-bold">Task</span>
                    </div>
                    <div class="d-flex flex-column justify-content-around"style={{height:'79vh'}}>
                    <CallTask></CallTask>
                    <EmailTask></EmailTask>
                    </div>
                </div>
                <div class="section col-4">
                <div class="sticky-bar position-sticky shadow d-flex justify-content-center align-items-center">
                        <span class="text-primary font-weight-bold">History</span>
                    </div>
                    <CallHistory></CallHistory>
                    <EnailHistory></EnailHistory>
                </div>
            </div>
        )
    }
}