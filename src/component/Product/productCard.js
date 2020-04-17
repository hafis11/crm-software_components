import React from 'react'
import './productCard.css'

export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#8efd96",
            status: "Instock",
            modalShow: false,
        }
        this.deleteSelf = this.deleteSelf.bind(this);
    }

    deleteSelf(){
        this.props.onDelete(this.props.id);
    }

    componentDidMount() {
    }

    onClick = () => {
        this.setState({
            modalShow: true
        })
    }
    onHide = () => {
        this.setState({
            modalShow: false
        })
    }
    statusChange = () => {
        if (this.state.color === "#8efd96") {
            this.setState({
                color: "#fd8b8d",
                status: "Out of stock"
            })
        } else {
            this.setState({
                color: "#8efd96",
                status: "Instock"
            })
        }
    }

    render() {
        return (
            <div class="box m-3">
                {/* product status */}
                <div class="block" style={{ backgroundColor: this.state.color }}
                    onClick={this.statusChange}>
                    <span class="blocktext">{this.state.status}</span>
                </div>
                {/* product image */}
                <div class="circle">
                    <span class="pronm">{this.props.name[0]}{this.props.name[1]}</span>
                </div>
                <div class="productname text-capitalize">{this.props.name}</div>
                <div class="productprice text-capitalize">{this.props.price}</div>
                {/* <div class="productdec">details</div> */}
                <div class="optionbar">
                    {/* product Delete button */}
                    <div type="button" onClick={this.deleteSelf} >
                        <span class="fa fa-trash deloption"/>
                        <span class="deloption">Delete</span>
                    </div>
                    {/* product Edit button */}
                    <div type="button" class="edioption" onClick={this.onClick}><span class="fa fa-pencil-square"/ >
                        <span class="edioption">Edit</span>
                    </div>
                </div>
            </div>
        )
    }
}