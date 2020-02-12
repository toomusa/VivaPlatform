import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

class Footer extends Component {
  render() {
    const { footer } = this.props.state.page.content;
    return (
      <Container fluid className="footer-container">
        <Row>
          <Col md={{span:6}} className="footer-col">
            <h5>{footer.c1}</h5>
          </Col>
          <Col md={{span:6}} className="footer-col">
            <h5 className="inline">{footer.c2}</h5>                  
            <h4 className="inline"><a href="mailto:viva@medasf.org" rel="noopener noreferrer" target="_blank">viva@medasf.org</a></h4>  
            <br></br>
            <br></br>
            <h5>{footer.c3}</h5>
            <h5 className="inline">{footer.c4}</h5>
            <h4 className="inline"><a href="https://www.facebook.com/medasf/" rel="noopener noreferrer" target="_blank">Facebook</a></h4>  
          </Col>
        </Row>
      </Container>
    )
  }
}


function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, {}),
)(Footer);
