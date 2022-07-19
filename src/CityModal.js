import React from 'react';
import { Modal, Button, Container, Image } from 'react-bootstrap';


class CityModal extends React.Component {
  

 
  render() {
    return (
      <>

        <Modal
        show={this.props.showModal}
          onHide={this.props.handleClose}
          size={"l"}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.location.display_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body> The coodinates of : {this.props.location.display_name} is {this.props.location.lat}, {this.props.location.lon}
          <Container>
              <Image
                style={{ width: '400px' }}
                src={this.props.displayMap} />

            </Container>
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
export default CityModal