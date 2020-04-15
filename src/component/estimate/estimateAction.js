import React, { Component } from "react"
import Adder from "./adder"
import PreviewAdder from "./previewAdder"
import './estimate.css'
export default class Estimate extends Component {
    constructor() {
        super()
        this.state = {
            selectedProduct: "Volvo",
            unit: 0,
            Rendercomps: [],
            RenderPreviewComps: []
        }

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }
    onDeleteHandler(Id) {
        console.log("id passed for deleting is: " + Id)
        var j;
        var k = productList.length;
        productList.splice(Id - 1, 1)
        for (j = 0; j < productList.length; j++) {
            productList[j].id = j + 1
        }
        console.log(productList)
        this.setState({ Rendercomps: productList.map(items => <Adder key={items.id} product={items.productName} id={items.id} units={items.units} gTotal={items.grandTotal} deleteAction={this.onDeleteHandler} />) });
        this.setState({ RenderPreviewComps: productList.map(items => <PreviewAdder key={items.id} product={items.productName} id={items.id} units={items.units} gTotal={items.grandTotal} />) });

    };


    onClickHandler() {

        var i;
        var gTotal;

        for (i = 0; i < productPrice.length; i++) {
            if (productPrice[i].product === this.state.selectedProduct) {
                 gTotal = this.state.unit * productPrice[i].price
                };
        }


        var adderInfo = {
            productName: this.state.selectedProduct,
            units: this.state.unit,
            id: productList.length + 1,
            grandTotal: gTotal
        };
        
        productList.push(adderInfo);
        this.setState({ Rendercomps: productList.map(items => <Adder key={items.id} product={items.productName} id={items.id} units={items.units} gTotal={items.grandTotal} deleteAction={this.onDeleteHandler} />) });
        this.setState({ RenderPreviewComps: productList.map(items => <PreviewAdder key={items.id} product={items.productName} id={items.id} units={items.units} gTotal={items.grandTotal} />) });
    }
    render() {
        return (
            <div class="condent-body h-auto d-flex flex-column align-items-center mt-4">
                {/* section2 */}
                <div class="options d-flex justify-content-between mt-4">
                    {/* three buttons */}
                    <div class="section1 d-flex ">
                        <div class="Create bg-light d-flex justify-content-center align-items-center" type="button"><span>Create</span></div>
                        <div class="Draft bg-light d-flex justify-content-center align-items-center" type="button"><span>Draft</span></div>
                        <div class="History bg-light d-flex justify-content-center align-items-center" type="button"><span>History</span></div>
                    </div>
                    {/* two colour buttons */}
                    <div class="section2 d-flex">
                        <div class="send bg-light d-flex justify-content-between align-items-center pl-1" type="button">
                            <div class="circle0 rounded-circle d-flex justify-content-center align-items-center text-light"><i class="fa fa-paper-plane"></i></div>
                            <span class="sent-text pr-2">Send</span>
                        </div>
                        <div class="send1 bg-light d-flex justify-content-between align-items-center ml-3 pl-1" type="button">
                            <div class="circle1 rounded-circle d-flex justify-content-center align-items-center text-light"><i class="fa fa-envelope-open "></i></div>
                            <span class="sent-text1 pr-2">Draft</span>
                        </div>
                    </div>
                </div>
                {/* section2 closed */}
                <div class="condent mt-2 d-flex flex-row">
                    <div class="box1 col-md-6">
                        {/* product tab */}
                        <div class="producttab h-auto mt-5">
                            <h4 class="ml-3 mb-0 m-2">Product Info</h4>
                            <table class="table table-borderless table-hover">
                                <thead class="thead">
                                    <tr >
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Rendercomps}
                                </tbody>
                            </table>
                            {/* Add product */}
                            <div class="d-flex  p-2">
                            <select id="products" defaultValue="Volvo"class="col-4  rounded-lg" defaultChecked="Volvo" name="product" onChange={event => this.setState({ selectedProduct: event.target.value })} >
                                <option value="Volvo">Volvo</option>
                                <option value="Saab">Saab</option>
                                <option value="Fiat">Fiat</option>
                                <option value="Audi">Audi</option>
                            </select>
                            <input class="unit-adder col-1 ml-5  mr-4 form-control bg-light border-0" type="text" placeholder="units" onChange={event => this.setState({ unit: event.target.value })}></input>
                            <div class="d-flex align-items-center text-success" style={{fontSize:"1.5vw"}} onClick={() => this.onClickHandler()}><i class="fa fa-plus-circle"/></div>
                        </div>
                            <div class="d-flex justify-content-end">
                                <div class="total col-3 p-2 d-flex justify-content-center align-items-center rounded-lg mb-3 mr-3 font-weight-bold" type="button"><span style={{ color: "gray" }}>TOTAL AMOUNT:300$</span></div>
                            </div>
                        </div>
                        {/* product tab close */}
                    </div>
                    <div class="box1 col-md-6">
                        {/* contact */}
                        <div class="estimate-head m-n4">
                            <div class="text-condent d-flex flex-row justify-content-between p-5 mt-4">
                                <div class="senter-text d-flex flex-column align-items-start">
                                    <h3 class="text-primary">SENDER</h3>
                                    <h4>Your Company Name</h4>
                                    <small>Address</small>
                                    <small>companymail@gmail.com</small>
                                    <small>111-111-111</small>
                                    <small>company.com</small>
                                </div>
                                <div class="senter-text d-flex flex-column align-items-end">
                                    <h3 class="text-primary">SENT TO</h3>
                                    <h4>James Merced</h4>
                                    <small>kwik kopy printing</small>
                                    <small>jamesmerced@gmail.com</small>
                                    <small>555-555-555</small>
                                    <small>kwikkopy.com</small>
                                </div>
                            </div>
                            {/* contact finished */}
                            <div class="senter-text d-flex flex-column pl-5 pb-2">
                                <h4>ESTIMATE DATE</h4>
                                <small>20/02/2020</small>
                            </div>
                        </div>
                        <div class="mt-5">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.RenderPreviewComps}
                                </tbody>
                            </table>
                            <hr class="mt-5" />
                            <div class="d-flex justify-content-end pb-5">
                                <div class="total-tab d-flex flex-row col-3 justify-content-between align-items-center p-4 mt-n3">
                                    <h4 class="mb-0">TOTAL</h4>
                                    <h4 class="mb-0">300$</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}










const productList = [



]

const productPrice = [
    {
        id: 1,
        product: "Volvo",
        price: 20
    },
    {
        id: 2,
        product: "Saab",
        price: 12
    },
    {
        id: 3,
        product: "Fiat",
        price: 15
    },
    {
        id: 4,
        product: "Audi",
        price: 30
    }

]