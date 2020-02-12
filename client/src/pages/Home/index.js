import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./style.css";
import wealth1 from "../../assets/images/wealth1.jpg";
import wealth2 from "../../assets/images/wealth2.jpg";
import wealth3 from "../../assets/images/wealth3.jpg";
let index = 0;
let pDivs = ["p1", "p2", "p3"];

class Home extends Component {

  _isMounted = false;

  state = {
    pDiv: "p1",
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
      } else {
        index++;
        if (index === 3) {
          index = 0
        }
        this.setState({
          pDiv: pDivs[index]
        })
      }
    }, 5000);
  }

  mapBullets = (bullet, idx) => {
    if (typeof(bullet) === "string") {
      return <li className="li-item" key={idx}><h5>{bullet}</h5></li>
    } else {
      return bullet.map((item, idx) => this.mapSubBullets(item, idx))
    }
  }

  mapSubBullets = (item, idx) => {
    return <li className="li-subitem" key={idx}><h5>{item}</h5></li>
  }

  select = id => {
    this.setState({
      pDiv: id,
      activated: true
    })
  }

  renderPdiv = () => {
    const { homePg } = this.props.state.page.content;
    switch (this.state.pDiv) {
      case "p1":
        return <ul className="ul-column">{homePg.c3.p1.bullets.map((bullet, idx) => this.mapBullets(bullet, idx))}</ul>
      case "p2":
        return <ul className="ul-column">{homePg.c3.p2.bullets.map((bullet, idx) => this.mapBullets(bullet, idx))}</ul>
      case "p3":
        return <ul className="ul-column">{homePg.c3.p3.bullets.map((bullet, idx) => this.mapBullets(bullet, idx))}</ul>
      default:
        break;
    }
  }

  render() {
    const { homePg } = this.props.state.page.content;
    return (
      <Container fluid>
        <Row>
          <Col>
          
            <div className="jumbotron text-center">
              <h1>{homePg.c1.line}</h1>
              <h1 className="mt-5">{homePg.c1.action}</h1>
            </div>

            <div className="jumbotron text-center">
              <h1 className="mb-4">{homePg.c2.title}</h1>
              <CardGroup>
                <Card className="border-0 shadow-none">
                  <Card.Body className="d-flex align-items-center text-center header-caption">
                    <h3>{homePg.c2.bullets[0]}</h3>
                  </Card.Body>
                  <Card.Img variant="bottom" src={wealth1} />
                </Card>
                <Card className="border-0 shadow-none">
                  <Card.Img variant="top" src={wealth2} />
                  <Card.Body className="d-flex align-items-center text-center header-caption">
                    <h3>{homePg.c2.bullets[1]}</h3>
                  </Card.Body>
                </Card>
                <Card className="border-0 shadow-none">
                  <Card.Body className="d-flex align-items-center text-center header-caption">
                    <h3>{homePg.c2.bullets[2]}</h3>
                  </Card.Body>
                  <Card.Img variant="bottom" src={wealth3} />
                </Card>
              </CardGroup>
            </div>

            <div className="jumbotron">
              <div>
                <div className="d-block title-div mb-4 text-center"><h1>{homePg.c3.header}</h1></div>
              </div>
              <div className=" d-flex justify-content-center">
                <div className="transform effect box" id={this.state.pDiv === "p1" ? "selected" : null} onClick={() => this.select("p1")}>
                  <h3 className="fliptext" id="short-p">{homePg.c3.p1.title}</h3>
                </div>
                <div className="transform effect box" id={this.state.pDiv === "p2" ? "selected" : null} onClick={() => this.select("p2")}>
                  <h3 className="fliptext" id="short-p">{homePg.c3.p2.title}</h3>
                </div>
                <div className="transform effect box" id={this.state.pDiv === "p3" ? "selected" : null} onClick={() => this.select("p3")}>
                  <h3 className="fliptext">{homePg.c3.p3.title}</h3>
                </div>
              </div>
              <div>
                {!this.state.activated && this.autoPlay()}
                <div className="d-block bullet-div">{this.renderPdiv()}</div>
              </div>
            </div>

            <div className="jumbotron">
              <h1 className="text-center mb-4 ">{homePg.c4.title}</h1>
              <ul className="ul-connect">
                {homePg.c4.bullets.map((bullet, idx) => this.mapBullets(bullet, idx))}
              </ul>
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
)(Home);