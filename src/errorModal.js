import React from 'react';
import { Modal, Button } from 'react-bootstrap';


class ErrorModal extends React.Component {
  

 
  render() {
    return (
      <>

        <Modal
        show={this.props.showModal}
          onHide={this.props.handleClose}
          size={"l"}>
          <Modal.Header closeButton>
            <Modal.Title>"sorry this is not a valid response</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ErrorModal