import React from 'react'
import TopBar from '../../component/TopBar/TopBar'

class DashBoard extends React.Component{
    render(){
        return(
            <div class="bg-light" style={{height:'100vh',width:'94vw'}}>
                <TopBar></TopBar>
                <h1>Dashboard</h1>
            </div>  
        )
    }
}
export default DashBoard