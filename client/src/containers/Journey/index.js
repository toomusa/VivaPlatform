import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import './style.css';
import Toggle from '../../components/Toggle';
import Goal from '../../components/Goal';
import { createJourney } from "../../actions/apiActions";

class Journey extends Component {

  state = {
    journey: {}
  }

  newJourney = () =>   {
    let userId = localStorage.getItem("userId")
    this.props.createJourney({ userId });
  }

  render() {
    const { journey } = this.props.state.api.user;
    return (
      <Container fluid className="journey-container jumbotron">
        { journey 
        ? <div className="journey-div" journeyid={journey._id}>
            <Toggle>
              {({ on, toggle, addNew }) => (
                  <Goal on={on} toggle={toggle} addNew={addNew} journey={journey} />
              )}
            </Toggle>
          </div>
        : <div className="journey-container text-center journey-div">
            <button className="btn btn-success btn-lg" onClick={this.newJourney}>Start My Journey</button>
          </div>
        }
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, { createJourney }),
)(Journey);
