import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'rsuite/Form';
import Lottie from 'lottie-react';
import deliveryAnime from '../lottiefiles/2.json';
import axios from 'axios';

const ModalComp = ({ showModal, closeModal, FinalIng, Cost }) => {
  const [Name, setName] = useState('');
  const [Number, setNumber] = useState(0);
  const [Location, setLocation] = useState('');

  const nameHandler = (e) => {
    setName(e);
  };
  const numberHandler = (e) => {
    setNumber(e);
  };

  const locationHandler = (e) => {
    setLocation(e);
  };

  const order = () => {
    if (Name === '') alert('Please Fill Name');
    else if (Number === 0) alert('Please Enter Number');
    else if (Location === '') alert('Please Fill Location');
    else {
      const userData = {
        name: Name,
        number: Number,
        location: Location,
        Cost: Cost,
        ingredientsOrdered: FinalIng,
      };
      axios
        .post(
          'https://burger2-c098d-default-rtdb.firebaseio.com/' +
            Name +
            Number +
            '.json',
          userData
        )
        .then((res) => {
          console.log(res);
          closeModal();
          alert('Success!! Your Order is placed');
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // console.log(FinalIng);
  };

  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Confirm Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Lottie
            style={{ width: '40%', marginLeft: '10%' }}
            animationData={deliveryAnime}
          />

          <Form style={{ marginLeft: '10%' }}>
            <Form.Group>
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control onChange={(e) => nameHandler(e)} />
              <Form.HelpText>Username is required</Form.HelpText>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Mobile Number</Form.ControlLabel>
              <Form.Control type='number' onChange={(e) => numberHandler(e)} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Location</Form.ControlLabel>
              <Form.Control type='name' onChange={(e) => locationHandler(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => order()}>Order</Button>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComp;
