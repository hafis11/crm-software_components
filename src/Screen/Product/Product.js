import React from 'react'
import './Product.css'
import TopBar from '../../component/TopBar/TopBar'
import AddProduct from '../../component/Product/addProduct'
import ProductList from '../../component/Product/productList'


class Product extends React.Component{
    render(){
        return(
            <div style={{height:'100vh',width:'94vw',backgroundColor:'#f7f7f7'}}>
                <TopBar></TopBar>
                <div class="head d-flex flex-row justify-content-between align-items-center">
                    <div class="head-text pl-5">Product List</div>
                    <AddProduct></AddProduct>
                </div>
                <ProductList></ProductList>
            </div>
        )
    }
}
export default Product