import React from 'react'
import '../productcard/productCard.css'
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
                status:"Instock"
            }
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
                <div className="productdec">@product description</div>
                <div className="optionbar">
                    {/* product Delete button */}
                    <div><FontAwesomeIcon icon={faTrash}className="deloption"/>
                    <text className="deloption">Delete</text></div>
                    {/* product Edit button */}
                    <div className="edioption"><FontAwesomeIcon icon={faEdit}/>
                    <text className="edioption">Edit</text></div>
                </div>
            </div>  
        )
    }
}
export default ProductCard