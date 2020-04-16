import React from 'react'
import './productList.css'

export default class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"#8efd96",
                status:"Instock",
                modalShow:false,
            data:[
                {
                id:'1',
                ProductName:'car',
                details:'new'
                },
            ],
        }           
    }
    componentDidMount(){
        this.setState(prevState => ({
            data: [...prevState.data ]
          }));
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
            <div class="container-fluid product-condent mt-3">
                    {this.state.data.map(item=>{
              return (
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
                <div class="productname">{item.ProductName}</div>
                <div class="productprice">{item.id}</div>
                <div class="productdec">details</div>
                <div class="optionbar">
                    {/* product Delete button */}
                    <div type="button" ><snap class="fa fa-trash deloption"/>
                    <span class="deloption">Delete</span></div>
                    {/* product Edit button */}
                    <div type="button" class="edioption" onClick={this.onClick}><snap class="fa fa-pencil-square"/>
                    <span class="edioption">Edit</span></div>
                </div>
            </div> 
              );
            })
          }
        </div>
        )
    }
}