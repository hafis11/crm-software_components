import React from 'react'
import TopBar from '../../component/TopBar/TopBar'

class Lead extends React.Component{
    render(){
        return(
            <div class="bg-secondary" style={{height:'100vh',width:'94vw'}}>
                <TopBar></TopBar>
                <h1>Lead & Invoice</h1>
            </div>  
        )
    }
}
export default Lead