import React from 'react';
import NavBar from '../components/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BurgerBuilder from '../components/BurgerBuilder';

const BuildPage = () => {
  return (
    <div>
      <div>
        <Row>
          <Col sm={1}>
            <NavBar />
          </Col>
          <Col style={{ paddingLeft: '9%' }} xs={11}>
            <BurgerBuilder />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BuildPage;
