import React, { Component } from 'react'
import { reduxForm, Field, reset } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { } from "../../actions/apiActions";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./style.css";

class AddModal extends Component {

  renderInput = field => {
    return (
      <div>
        <input {...field.input} {...field} />
        {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
      </div>
    )
  }

  resetAndToggle = () => {
    this.props.toggle();
    this.props.dispatch(reset("NewItem"))
  }
  
  submitAndToggle = formProps => {
    this.props.toggle();
    this.props.onSubmit(formProps);
    this.props.dispatch(reset("NewItem"))
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Modal show={this.props.show} onHide={this.resetAndToggle} >
        <form onSubmit={handleSubmit(this.submitAndToggle)}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new {this.props.blocktype}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <fieldset>
              <Field
                name="item"
                component={this.renderInput}
                className="form-field"
              />
            </fieldset>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.resetAndToggle}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    )
  }
}

function mapStateToProps() {
  return {};
}

export default compose(
  connect(mapStateToProps, {}),
  reduxForm({
    form: "NewItem"
  })
)(AddModal);
