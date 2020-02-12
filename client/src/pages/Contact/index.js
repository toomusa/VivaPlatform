import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validator from "validator";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./style.css";

class Contact extends Component {
  
  state = {
    formError: ''
  }

  mapBullets = (bullet, idx) => {
    if (typeof(bullet) === "string") {
      return <li key={idx}><h5>{bullet}</h5></li>
    } else {
      return bullet.map((item, idx) => this.mapSubBullets(item, idx))
    }
  }

  mapSubBullets = (item, idx) => {
    return <li className="ml-3" key={idx}><h5>{item}</h5></li>
  }

  renderInput = field => {
    return (
      <div>
        <label className="label-field inline">{field.label}:</label>
        <input className="input-field inline" {...field.input} {...field} />
        {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
      </div>
    )
  }

  onSubmit = formProps => {
    const errors = validate(formProps);
    if (errors.error) {
      this.setState({
        formError: errors.error
      })
    } 
  }

  resetError = () => {
    setTimeout( () => {
      this.setState({
        formError: ''
      })
    }, 3000)
  }

  flashError = () => {
    if (this.state.formError) {
      this.resetError();
      return (
        <div>{this.state.formError}</div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { contactPg } = this.props.state.page.content;
    return (
      <Container fluid>
        <Row>
          <Col>
            
            <div className="jumbotron">
              <h3>{contactPg.c1.title}</h3>
              <ul>
                {contactPg.c1.bullets.map((bullet, idx) => this.mapBullets(bullet, idx))}
                <li>
                  <h5 className="inline">{contactPg.c2}</h5>
                  <h4 className="inline"><a href="mailto:viva@medasf.org" rel="noopener noreferrer" target="_blank">viva@medasf.org</a></h4>  
                </li>
              </ul>
              
            </div>

            <div className="jumbotron">
              <h3>{contactPg.form.contact}</h3>
              <br></br>
              <form onSubmit={handleSubmit(this.onSubmit)} className="contact-form">
                <fieldset>
                  <Field
                    name="name"
                    type="text"
                    label={contactPg.form.name}
                    autoComplete="none"
                    className="contact-input"
                    component={this.renderInput}
                    />
                  <Field
                    name="email"
                    type="email"
                    label={contactPg.form.email}
                    autoComplete="none"
                    className="contact-input"
                    component={this.renderInput}
                    />
                  <Field
                    name="phone"
                    type="phone"
                    label={contactPg.form.phone}
                    autoComplete="none"
                    className="contact-input"
                    component={this.renderInput}
                    />
                  <Field
                    name="message"
                    type="textarea"
                    label={contactPg.form.message}
                    autoComplete="none"
                    className="contact-input contact-message"
                    component={this.renderInput}
                    />
                  <Button variant="dark" size="sm" className="submitBtn float-right" type="submit">{contactPg.form.submit}</Button>
                  {this.state.formError ? this.flashError() : <div></div>}
                </fieldset>
              </form>
            </div>

            
          </Col>
        </Row>
      </Container>
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
  if (!formProps.name) {
    errors.error = "You must enter a name";
  }
  if (!formProps.phone) {
    errors.error = "You must enter a phone number";
  }
  if (!formProps.message) {
    errors.error = "You must enter a message";
  }
  return errors;
}

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, {}),
  reduxForm({
    form: "contact",
  })
)(Contact);