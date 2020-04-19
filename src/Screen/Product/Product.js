import React from 'react'
import './Product.css'
import AddProduct from '../../component/Product/addProduct'
import ProductCard from '../../component/Product/productCard'
import TopBar from '../../component/TopBar/TopBar'
const axios = require("axios").default;

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:null
        }
        this.fetchProducts = this.fetchProducts.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.showProducts = this.showProducts.bind(this);
    }

    fetchProducts(){
        axios.get("http://localhost:3001/products",{withCredentials:true}).then(response=>{
            console.log(response);
            this.setState({products:response.data})
        }).catch(response=>{
            alert("Failed to load Products");
            console.error("Error in Responses ,",response);
        })
    }

    deleteProduct(id){
        axios.delete(`http://localhost:3001/products/${id}`,{withCredentials:false}).then(response=>{
            alert("Product Deleted");
            this.fetchProducts();
        }).catch(response=>{
            console.log("error in deleting PRoduct card");
            alert("Failed To delete the product")
            // console.log(response);
        })
    }

    componentDidMount(){
        this.fetchProducts();
    }

    showProducts(){
        if(this.state.products!==null){
            let productList = [];
            this.state.products.forEach(product => {
                productList.push(<ProductCard name={product.productName} price={product.price} key={product.idproducts} id={product.idproducts} onDelete={this.deleteProduct} />)
            });
            return productList;
        }
    }

    render(){
        return(
            <div style={{width:'94vw',backgroundColor:'#f7f7f7'}}>
                <TopBar></TopBar>
                <div class="head d-flex flex-row justify-content-between align-items-center">
                    <div class="head-text pl-5">Product List</div>
                    <AddProduct refresh={this.fetchProducts} />
                </div>
                <div class="container-fluid product-condent mt-3 d-flex flex-wrap justify-content-start">
                {/* <ProductCard name="Cloud Solutions" price="300" /> */}
                {this.showProducts()}
                </div>
            </div>
        )
    }
}
export default Product