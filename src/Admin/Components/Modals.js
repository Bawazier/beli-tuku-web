import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modals extends React.Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal}>
                    <ModalHeader toggle={this.props.toggle}>Detail</ModalHeader>
                    <ModalBody>
                        {this.props.body}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.actionButton}>{this.props.buttonText}</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Modals;