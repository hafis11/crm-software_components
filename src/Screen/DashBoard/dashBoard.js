import React from 'react'
import TopBar from '../../component/TopBar/TopBar'
import Estimate from '../../component/estimate/estimateAction'

class DashBoard extends React.Component{
    render(){
        return(
            <div class="bg-light" style={{height:'100vh',width:'94vw'}}>
                <TopBar></TopBar>
                <Estimate></Estimate>
            </div>  
        )
    }
}
export default DashBoard