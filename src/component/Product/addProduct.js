import React from 'react';
import './addProduct.css';
import { Drawer } from 'antd';
const axios = require("axios").default;


export default class AddProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      productName: null,
      price: null
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }


  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onClickHandler() {
    if (this.state.productName !== null && this.state.productName.length !== 0 && this.state.price !== null && this.state.price.length !== 0) {
      axios.post("http://localhost:3001/products", {
        productName: this.state.productName,
        price: this.state.price
      }, { withCredentials: true }).then(response=>{
        if(response.status ==200){
          alert("Product Added.")
          this.onClose();
          this.props.refresh();
        }
        else{
          console.log("Error ",response);
          alert("Failed To Add Product");
        }
      }).catch(response=>{
        console.log("Error in catch of add product",response);
        alert("Failed To Add Product");
      })
    }
    else {
      alert("Product Name or Price is empty or Invalid");
    }
  }

  render() {
    return (
      <div class="pr-5">
        <div class="bg-primary lead-button d-flex justify-content-center align-items-center rounded" type="button" onClick={this.showDrawer}><h4 class="m-3 text-light font-weight-bold mb-0">ADD</h4></div>
        <Drawer
          width={"30vw"}
          bodyStyle={{ padding: 0 }}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}>
          <div class="container d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex flex-column">
              <h1 class="mb-0">Add Product</h1>
              <h4 class="mb-0">Information</h4>
            </div>
            <div class="mt-4">
              <span>Product Name</span>
              <input type="text" class="form-control" onChange={event => this.setState({ productName: event.target.value })} />
            </div>
            {/* <div class="mt-4">
              <span>Product Details</span>
              <textarea type="text" class="form-control" rows="4" placeholder="Please write customer notes" onChange={event => this.setState({productDetails: event.target.value})}/>
            </div> */}
            <div class="mt-4">
              <span>Product Price</span>
              <input type="text" class="form-control" onChange={event => this.setState({ price: event.target.value })} />
            </div>
            <div class="button-group d-flex flex-row justify-content-between mt-5">
              <div type="button" onClick={() => this.onClickHandler()} class="button bg-primary rounded p-2 d-flex justify-content-center align-items-center text-white"><span>Add</span></div>
              <div type="button" onClick={this.onClose} class="button bg-light text-primary rounded p-2 d-flex justify-content-center align-items-center"><span>Cancel</span></div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
};


