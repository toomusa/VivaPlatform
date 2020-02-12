import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../../actions/authActions";
import Button from 'react-bootstrap/Button';
import history from "../../services/history";
import "./style.css";

class RegToggle extends Component {

  state = {
    show: false,
    regtype: ""
  }
  
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  onSubmit = formProps => {     
    this.toggle();
    Object.assign( formProps, { regtype: this.state.regtype })
    this.props.signup(formProps, () => {
      this.props.hideAuth();
      history.push("/journey");
    })
  }

  selectOption = e => {
    this.setState({
      regtype: e.target.value
    })
    this.toggle()
  }
  
  render() {
    return (
      <>
        <Button 
          onClick={this.selectOption} 
          value={this.props.reg}
          size="sm" 
          variant={this.state.show ? "warning" : "light"} 
          className="toggleBtn shadow-none">{this.props.reg}</Button>
        {this.props.children({
          show: this.state.show,
          toggle: this.toggle,
          onSubmit: this.onSubmit,
          regtype: this.state.regtype
        })}
      </>
    )
  }
}

function mapStateToProps() {
  return {};
}

export default compose(
  connect(mapStateToProps, { signup }),
)(RegToggle);