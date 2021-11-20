import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComp from './ButtonComp';
import Adder from './Adder';
import ModalComp from './ModalComp';

const BurgerBuilder = () => {
  const [ingredients, setingredients] = useState([]);
  const [disableBtn, setdisableBtn] = useState(true);
  const [cost, setCost] = useState(0);
  const [showModal, setshowModal] = useState(false);
  const [FinalIng, setFinalIng] = useState([]);

  const addIng = (e) => {
    setdisableBtn(false);
    if (e === 'green') {
      setingredients([...ingredients, '#2ecc71']);
      setFinalIng([...FinalIng, 'Salad']);
      setCost(cost + 2);
    } else if (e === 'yellow') {
      setingredients([...ingredients, '#fed330']);
      setFinalIng([...FinalIng, 'Cheese']);
      setCost(cost + 4);
    } else {
      setingredients([...ingredients, '#ff7675']);
      setFinalIng([...FinalIng, 'Meat']);
      setCost(cost + 3);
    }
  };

  const removeIng = (e) => {
    var a = ingredients.pop();
    FinalIng.pop();
    setingredients([...ingredients]);
    setFinalIng([...FinalIng]);
    if (a === '#2ecc71') setCost(cost - 2);
    else if (a === '#fed330') setCost(cost - 4);
    else setCost(cost - 3);
  };

  return (
    <div>
      <div>
        <Row>
          <Col sm={3}>
            <ButtonComp
              clickIngredient={(e) => addIng(e)}
              disableBtn={disableBtn}
              removeIngredient={(e) => removeIng(e)}
              cost={cost}
              openModal={() => setshowModal(true)}
            />
          </Col>
          <Col style={{ paddingLeft: '9%' }} xs={9}>
            <Adder ingredients={ingredients} cost={cost} />
          </Col>
        </Row>
      </div>
      <ModalComp
        Cost={cost}
        FinalIng={FinalIng}
        showModal={showModal}
        closeModal={() => setshowModal(false)}
      />
    </div>
  );
};

export default BurgerBuilder;
