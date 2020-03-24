import React from 'react'
import '../AddProduct/addProduct.css'
import { Button } from 'react-bootstrap';
import Inputform from './inputForm'

class AddProduct extends React.Component{
  constructor(props){
    super(props);
    this.state={
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
  render(){
    return(
      <div>
      <Button variant="primary" onClick={this.onClick}>
        Add Product
      </Button>

      <Inputform
        show={this.state.modalShow}
        onHide={this.onHide}
      />
    </div>
    )
  }
}
export default AddProduct