import React from 'react';
import {
    // Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class ModalsProduct extends React.Component {
    render() {
        return (
            <Modal>
                <ModalHeader>Update</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="secondary" onClick={() => {props.modalOpen}}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        )
    }
}

export default ModalsProduct;