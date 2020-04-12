import React from 'react'
import TopBar from '../../component/TopBar/TopBar'

class Product extends React.Component{
    render(){
        return(
            <div class="bg-warning" style={{height:'100vh',width:'94vw'}}>
                <TopBar></TopBar>
                <h1>Product</h1>
            </div>  
        )
    }
}
export default Product