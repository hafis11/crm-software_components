import React from 'react'
import './lead.css'
import TopBar from '../../component/TopBar/TopBar'
import LeadAdder from '../../component/leadAdder/sideMenu'

class Lead extends React.Component {
    render() {
        return (
            <div class="bg-light" style={{ height: '100vh', width: '94vw' }}>
                <TopBar></TopBar>
                <div class="head d-flex flex-row justify-content-between align-items-center">
                    <div class="head-text pl-5">Lead & Invoice</div>
                    <LeadAdder></LeadAdder>
                </div>
                <div class="lead-table">
                    <table class="table table-hover table">
                        <thead>
                            <tr>
                                <th scope="col">CUSTOMER</th>
                                <th scope="col">EMIRATE</th>
                                <th scope="col">TAGS</th>
                                <th scope="col">CREATED DATE</th>
                                <th scope="col">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Stella</td>
                                <td>Dubai</td>
                                <td>Crane</td>
                                <td>23 May 2019</td>
                                <td>NewLead</td>
                            </tr>
                            <tr>
                                <td>Samantha lvy</td>
                                <td>Ras-al-khaimah</td>
                                <td>Driller</td>
                                <td>23 May 2020</td>
                                <td>Estimate</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Lead