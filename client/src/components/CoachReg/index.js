import React, { Component } from 'react'
import { reduxForm, Field, reset } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validator from "validator";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { } from "../../actions/apiActions";
import "./style.css";

class CoachReg extends Component {

  state = {
    formError: ''
  }
  
  renderInput = field => {
    return (
      <div>
        <label className="label-field">{field.label}:</label>
        <input className="input-field" {...field.input} {...field} />
        {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
      </div>
    )
  }

  resetAndToggle = () => {
    this.props.toggle();
    this.props.dispatch(reset("Coach-Reg"))
  }
  
  submitAndToggle = formProps => {
    const errors = validate(formProps);
    if (errors.error) {
      this.setState({
        formError: errors.error
      })
    } else {
      this.props.toggle();
      this.props.onSubmit(formProps);
      this.props.dispatch(reset("Coach-Reg"))
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { reg } = this.props.state.page.content;
    return (
      <Modal show={this.props.show} onHide={this.resetAndToggle} >
        <form onSubmit={handleSubmit(this.submitAndToggle)}>
          <Modal.Header>
            <Modal.Title className="mx-auto">{reg.join}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
            <fieldset>
              <Field
                name="fname"
                type="text"
                label={reg.first}
                component={this.renderInput}
                className="form-field"
              />
              <Field
                name="lname"
                type="text"
                label={reg.last}
                component={this.renderInput}
                className="form-field"
                />
              <Field
                name="email"
                type="text"
                label={reg.email}
                autoComplete="off"
                component={this.renderInput}
                className="form-field"
                />
              <Field
                name="password"
                type="password"
                label={reg.password}
                autoComplete="off"
                component={this.renderInput}
                className="form-field"
              />
              <Field
                name="title"
                type="text"
                label={reg.title}
                component={this.renderInput}
                className="form-field"
              />
              <Field
                name="focus"
                type="text"
                label={reg.focus}
                component={this.renderInput}
                className="form-field"
                />
              <Field
                name="cell"
                type="number"
                label={reg.phone}
                component={this.renderInput}
                className="form-field"
                />
              <Field
                name="bday"
                type="date"
                label={reg.birth}
                component={this.renderInput}
                className="form-field"
              />
            </fieldset>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="secondary" onClick={this.resetAndToggle}>
              {reg.cancel}
            </Button>
            <Button variant="primary" type="submit">
              {reg.signup}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    )
  }
}

const validate = formProps => {
  const errors = {};
  if (!formProps.email) {
    errors.error = "You must enter an email";
  }
  if (formProps.email) {
    if (!validator.isEmail(formProps.email)) {
      errors.error = "You must enter a valid email address";
    }
  }
  if (!formProps.password) {
    errors.error = "You must enter a password";
  }
  return errors;
}

function mapStateToProps(state) {
  return { state, errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, {}),
  reduxForm({
    form: "Coach-Reg"
  })
)(CoachReg);
