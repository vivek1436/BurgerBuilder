import React from 'react';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react';
import burgerAnime from '../lottiefiles/1.json';

const ButtonComp = ({ clickIngredient, cost, removeIngredient, openModal }) => {
  return (
    <div
      className='d-grid gap-2'
      style={{ paddingTop: '15%', paddingLeft: '5%' }}
    >
      <Lottie animationData={burgerAnime} />
      <Button
        variant='success'
        size='lg'
        onClick={() => clickIngredient('green')}
      >
        Salad
      </Button>
      <Button
        variant='warning'
        size='lg'
        onClick={() => clickIngredient('yellow')}
      >
        Cheese
      </Button>
      <Button variant='danger' size='lg' onClick={() => clickIngredient('red')}>
        Meat
      </Button>
      <Button
        variant='primary'
        size='lg'
        onClick={openModal}
        disabled={cost <= 0 ? true : false}
      >
        Confirm
      </Button>
      <Button
        variant='primary'
        size='lg'
        disabled={cost <= 0 ? true : false}
        onClick={() => removeIngredient('remove')}
      >
        Remove
      </Button>
    </div>
  );
};

export default ButtonComp;
