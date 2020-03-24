import React from 'react'
import '../productcard/productCard.css'
import Inputform from '../AddProduct/inputForm'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/react-fontawesome


class ProductCard extends React.Component{
    constructor(props){
        super(props);
            this.state={
                color:"#8efd96",
                status:"Instock",
                modalShow:false
            }
    }
    onClick=()=>{
        this.setState({
          modalShow:true
        })
      }
      onHide=()=>{
        this.setState({
          modalShow:false
        })
      }
    statusChange=()=>{
        if(this.state.color === "#8efd96"){
            this.setState({
                color:"#fd8b8d",
                status:"Out of stock"
            })
        }else{
            this.setState({
                color:"#8efd96",
                status:"Instock"
            })
        }
    }
    render(){
        return(
            <div className="box">
                {/* product status */}
            <div className="block" style={{backgroundColor:this.state.color}}
                onClick={this.statusChange}>
                <text className="blocktext">{this.state.status}</text>
            </div>
            {/* product image */}
                <div className="circle">
                    <text className="pronm">PN</text>
                </div>
                <div className="productname">{this.props.productName}</div>
                <div className="productprice">{this.props.productPrice+"$"}</div>
                <div className="productdec">{this.props.productDescription}</div>
                <div className="optionbar">
                    {/* product Delete button */}
                    <Button variant="Light"><FontAwesomeIcon icon={faTrash}className="deloption"/>
                    <text className="deloption">Delete</text></Button>
                    {/* product Edit button */}
                    <Button variant="Light" className="edioption" onClick={this.onClick}><FontAwesomeIcon icon={faEdit}/>
                    <text className="edioption">Edit</text></Button>
                    <Inputform
                        show={this.state.modalShow}
                        onHide={this.onHide}
                        productPrice={this.props.productPrice}
                        productName={this.props.productName}
                        productDescription={this.props.productDescription}
                    />
                </div>
            </div>  
        )
    }
}
export default ProductCard