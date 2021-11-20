import React from 'react';
import NavBar from '../components/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import aboutCard from '../images/aboutCard.jpg';
import Lottie from 'lottie-react';
import deliveryAnime from '../lottiefiles/3.json';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <div>
        <Row>
          <Col sm={1}>
            <NavBar />
          </Col>
          <Col style={{ paddingLeft: '9%' }} xs={11}>
            <div className='image' style={{ paddingTop: '1%' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={aboutCard} />
                <Card.Body>
                  <Card.Title>Welcome</Card.Title>
                  <Lottie
                    style={{ width: '50%', marginLeft: '25%' }}
                    animationData={deliveryAnime}
                  />
                  <Card.Text>
                    Hi! there McLolnalds team heartly welcome's you. You can
                    build your own Burger and place your order here. Thank you!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
