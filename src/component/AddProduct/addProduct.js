import React from 'react'
import '../AddProduct/addProduct.css'
import { Modal ,Button ,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'

const AddProduct = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    return (
      <div>
        <Button variant="primary"onClick={showModal}>Primary</Button>
        <Modal
        size="lg"
        centered
        show={isOpen} onHide={hideModal}
        className="condainer"
        >
            <div className="headbox">
            <div className="header">
                <text className="addprotext">Add Product</text>
                <h6>information</h6>
            </div>
            {/* input product photo */}
            <div className="filebox border border-primary rounded">
                <FontAwesomeIcon icon={faPhotoVideo} className="formtext"/>
                <text className="formtext">Add Photo</text>
            </div>
            </div>
            {/* form */}
            <Form className="formcondent">
            <Form.Group controlId="formBasicEmail">
                {/* input product name */}
                <Form.Label className="formtext">Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter the product name" className="inputbar"/>
            </Form.Group>
            {/* input product description */}
            <Form.Group controlId="exampleForm.ControlTextarea1" className="inputbar">
                <Form.Label className="formtext">Product Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter the product description" rows="3" />
            </Form.Group>
            {/* input product price */}
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="formtext">Price</Form.Label>
                <Form.Control type="number" placeholder="Enter the price" className="inputbar"/>
            </Form.Group>
            <Form.Group className="formbutton">
                {/* to save product */}
                <Button variant="primary" type="submit">Save</Button>
                {/* to cancel Modal */}
                <Button variant="light" type="submit" onClick={hideModal}>Cancel</Button>
            </Form.Group>
            </Form>
        </Modal>
      </div>
    );
  };
  export default AddProduct
    