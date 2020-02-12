import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
let index = 0;
let rDivs = ["r1", "r2"];

class Services extends Component {

  _isMounted = false;

  state = {
    rDiv: "r1",
    activated: false
  }

  componentDidMount() {
    this._isMounted = true;
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }
  
  autoPlay = () => {
    let interval = setTimeout(() => {
      if (this.state.activated || !this._isMounted) {
        index = 0;
        clearInterval(interval);
        return;
      } else {
        index++;
        if (index === 2) {
          index = 0
        }
        this.setState({
          rDiv: rDivs[index]
        })
      }
    }, 5000);
  }

  mapBullets = (bullet, idx) => {
    if (typeof (bullet) === "string") {
      return <li key={idx}><h5>{bullet}</h5></li>
    } else {
      return bullet.map((item, idx) => this.mapSubBullets(item, idx))
    }
  }

  mapSubBullets = (item, idx) => {
    return <li className="ml-3" key={idx}><h5>{item}</h5></li>
  }

  select = id => {
    this.setState({
      rDiv: id,
      activated: true
    })
  }

  renderRdiv = () => {
    const { recsPg } = this.props.state.page.content;
    switch (this.state.rDiv) {
      case "r1":
        return <ul className="ul-column">{recsPg.c1.bullets.map((bullet, idx) => this.mapBullets(bullet, idx))}</ul>
      case "r2":
        return <ul className="ul-column">{recsPg.c2.bullets.map((bullet, idx) => this.mapBullets(bullet, idx))}</ul>
      default:
        break;
    }
  }

  render() {
    const { recsPg } = this.props.state.page.content;
    return (    
        <Container fluid>
          <Row>
            <Col>
              <div className="jumbotron">
                <div>
                  <div className="d-block title-div mb-4 text-center"><h1>Services</h1></div>
                </div>
                <div className=" d-flex justify-content-center">
                  <div className="transform effect box" id={this.state.rDiv === "r1" ? "selected" : null} onClick={() => this.select("r1")}>
                    <h3 className="fliptext" id="sm-p">{recsPg.c1.title}</h3>
                  </div>
                  <div className="transform effect box" id={this.state.rDiv === "r2" ? "selected" : null} onClick={() => this.select("r2")}>
                    <h3 className="fliptext" id="short-p">{recsPg.c2.title}</h3>
                  </div>
                </div>
                <div>
                  {!this.state.activated && this.autoPlay()}
                  <div className="d-block bullet-div">{this.renderRdiv()}</div>
                </div>
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
)(Services);