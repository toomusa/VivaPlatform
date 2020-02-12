import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from "../../containers/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../assets/images/logo.png";
import meda from "../../assets/images/meda.png";
import './style.css';

export default function Header() {
  return (
    <Container fluid className="header-container">
      <Row noGutters>
        <Col xs={{span:12}} sm={{span:12}} md={{span:12}} lg={{span:12}} xl={{span:12}}>
          <div className="logo-div">
            <img src={logo} alt="VIVA" className="brand-logo" />
          </div>
          <div className="logo-div">
            <img src={meda} alt="MEDA" className="meda-logo" />
          </div>
        </Col>
      </Row>
      <Navbar />
    </Container>
  )
}
