import React from 'react';
import './addProduct.css';
import { Drawer} from 'antd';


export default class AddProduct extends React.Component {
  constructor(){
    super()
    this.state = {
      visible: false,
      addProduct: '',
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

  onClickHandler(){
    var productInfo = {
      productName: this.state.addProduct,
      productDescription: this.state.productDetails,
      productPrice: this.state.productPrice,
      id: productList.length + 1,
    };
    productList.push(productInfo);
    console.log(productList)
  }

  render() {
    return (
      <div class="pr-5">
        <div class="bg-primary lead-button d-flex justify-content-center align-items-center rounded"type="button" onClick={this.showDrawer}><h4 class="m-3 text-light font-weight-bold mb-0">ADD</h4></div>
        <Drawer
          width={"30vw"}
          bodyStyle={{padding:0}}
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
              <input type="text" class="form-control" onChange={event => this.setState({addProduct: event.target.value})}/>
            </div>
            <div class="mt-4">
              <span>Product Details</span>
              <textarea type="text" class="form-control" rows="4" placeholder="Please write customer notes" onChange={event => this.setState({productDetails: event.target.value})}/>
            </div>
            <div class="mt-4">
              <span>Product Price</span>
              <input type="text" class="form-control"onChange={event => this.setState({productPrice: event.target.value})}/>
            </div>
            <div class="button-group d-flex flex-row justify-content-between mt-5">
              <div type="button" onClick={()=> this.onClickHandler()} class="button bg-primary rounded p-2 d-flex justify-content-center align-items-center"><span>Click</span></div>
              <div type="button" onClick={this.onClose} class="button bg-light text-primary rounded p-2 d-flex justify-content-center align-items-center"><span>Cancel</span></div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
};

const productList = []

