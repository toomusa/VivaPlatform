import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

class About extends Component {

  render() {
    const { aboutPg } = this.props.state.page.content;
    return (
      <Container fluid>
        <Row>
          <Col>

            <div className="jumbotron text-center">
              <h1>{aboutPg.c1}</h1>
              <h5 className="mt-4">{aboutPg.c2}</h5>
              <h5 className="mt-4">{aboutPg.c3}</h5>
            </div>

            <div className="jumbotron text-center">
              <h1>{aboutPg.c4.title}</h1>
              <h4><a href="https://medasf.org/about/staff-directory/" rel="noopener noreferrer" target="_blank">{aboutPg.c4.c1}</a></h4>
              <br></br>
              <Container>
                <Row>
                  <Col md={{span:4}} sm={{span:6}} xs={{span:12}}>
                    <h3>{aboutPg.c4.f1}</h3>
                  </Col>
                  <Col md={{span:4}} sm={{span:6}} xs={{span:12}}>
                    <h3>{aboutPg.c4.f2}</h3>
                  </Col>
                  <Col md={{span:4}} sm={{span:6}} xs={{span:12}}>
                    <h3>{aboutPg.c4.f3}</h3>
                  </Col>
                  <Col md={{span:5, offset:1}} sm={{span:6}} xs={{span:12}}>
                    <h3>{aboutPg.c4.f4}</h3>
                  </Col>
                  <Col md={{span:5}} sm={{span:6}} xs={{span:12}}>
                    <h3>{aboutPg.c4.f5}</h3>
                  </Col>
                </Row>
              </Container>
            </div>

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
)(About);