import React from 'react'
import './productCard.css'
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
            <div class="box">
                {/* product status */}
            <div class="block" style={{backgroundColor:this.state.color}}
                onClick={this.statusChange}>
                <span class="blocktext">{this.state.status}</span>
            </div>
            {/* product image */}
                <div class="circle">
                    <span class="pronm">PN</span>
                </div>
                <div class="productname">Product Name</div>
                <div class="productprice">100</div>
                <div class="productdec">details</div>
                <div class="optionbar">
                    {/* product Delete button */}
                    <Button variant="Light"><FontAwesomeIcon icon={faTrash}class="deloption"/>
                    <span class="deloption">Delete</span></Button>
                    {/* product Edit button */}
                    <Button variant="Light" class="edioption" onClick={this.onClick}><FontAwesomeIcon icon={faEdit}/>
                    <span class="edioption">Edit</span></Button>
                </div>
            </div>  
        )
    }
}
export default ProductCard