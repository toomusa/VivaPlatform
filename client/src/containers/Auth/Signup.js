import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { login, signup } from "../../actions/authActions";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import RegToggle from "../../components/RegToggle";
import ClientReg from "../../components/ClientReg";
import CoachReg from "../../components/CoachReg";
import PartnerReg from "../../components/PartnerReg";
import "./style.css";

class Signup extends Component {

  render() {
    const { auth } = this.props.state.page.content;
    return (
      <div className="selector-div ml-auto d-flex justify-content-end">
        <ButtonToolbar className="ml-auto">
        <span className="selector-caption text-light">{auth.select}</span>
          <RegToggle reg={auth.client} hideAuth={this.props.hideAuth} >
            {({ show, toggle, onSubmit, regtype }) => (
              <ClientReg show={show} toggle={toggle} onSubmit={onSubmit} regtype={regtype} reg="client"/>
            )}
          </RegToggle>
          <RegToggle reg={auth.coach} hideAuth={this.props.hideAuth} >
            {({ show, toggle, onSubmit, regtype }) => (
              <CoachReg show={show} toggle={toggle} onSubmit={onSubmit} regtype={regtype} reg="coach"/>
            )}
          </RegToggle>
          <RegToggle reg={auth.partner} hideAuth={this.props.hideAuth} >
            {({ show, toggle, onSubmit, regtype }) => (
              <PartnerReg show={show} toggle={toggle} onSubmit={onSubmit} regtype={regtype} reg="partner"/>
            )}
          </RegToggle>
        </ButtonToolbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state, errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, { login, signup })
)(Signup);