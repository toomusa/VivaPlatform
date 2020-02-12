import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { addComment, addTask, addMilestone, addGoal } from "../../actions/apiActions";
import "./style.css";

class AddToggle extends Component {

  state = {
    show: false,
    refDoc: {},
    blocktype: ""
  }
   
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  captureAndToggle = e => {      
    this.toggle();

    const btn = e.target;
    const blocktype = btn.parentElement.attributes.blocktype.value;
    let taskId, milestoneId, goalId, journeyId;

    switch (blocktype) {
      case "comment":
        // adding comment
        taskId = btn.closest(".task-div").attributes.taskid.value
        milestoneId = btn.closest(".milestone-div").attributes.milestoneid.value
        goalId = btn.closest(".goal-div").attributes.goalid.value
        journeyId = btn.closest(".journey-div").attributes.journeyid.value
        this.setState({ 
          refDoc: { taskId, milestoneId, goalId, journeyId },
          blocktype: blocktype.charAt(0).toUpperCase() + blocktype.slice(1)
        })
        break;
      case "task":
        // adding task
        milestoneId = btn.closest(".milestone-div").attributes.milestoneid.value
        goalId = btn.closest(".goal-div").attributes.goalid.value
        journeyId = btn.closest(".journey-div").attributes.journeyid.value
        this.setState({ 
          refDoc: { milestoneId, goalId, journeyId },
          blocktype: blocktype.charAt(0).toUpperCase() + blocktype.slice(1)
        })
        break;
      case "milestone":
        // adding milestone
        goalId = btn.closest(".goal-div").attributes.goalid.value
        journeyId = btn.closest(".journey-div").attributes.journeyid.value
        this.setState({ 
          refDoc: { goalId, journeyId },
          blocktype: blocktype.charAt(0).toUpperCase() + blocktype.slice(1)
        })
        break;   
      case "goal":
        // adding life goal
        journeyId = btn.closest(".journey-div").attributes.journeyid.value
        this.setState({ 
          refDoc: { journeyId },
          blocktype: blocktype.charAt(0).toUpperCase() + blocktype.slice(1)
        })
        break;   
      default:
        break;
    }
  }

  onSubmit = formProps => {
    this.setState({
      refDoc: Object.assign( this.state.refDoc, { itemText: formProps.item })
    })
    const { blocktype, refDoc } = this.state;
    switch (blocktype) {
      case "Comment":
        // adding comment
        this.props.addComment(refDoc)
        break;
      case "Task":
        // adding task
        this.props.addTask(refDoc)
        break;
      case "Milestone":
        // adding milestone
        this.props.addMilestone(refDoc)
        break;   
      case "Goal":
        // adding life goal
        this.props.addGoal(refDoc)
        break;   
      default:
        break;
    }
  }
  
  render() {
    return (
      <>
        <button onClick={this.captureAndToggle} className="add-button">+</button>
        {this.props.children({
          show: this.state.show,
          toggle: this.toggle,
          onSubmit: this.onSubmit,
          blocktype: this.state.blocktype
        })}
      </>
    )
  }
}

function mapStateToProps() {
  return {};
}

export default compose(
  connect(mapStateToProps, { addComment, addTask, addMilestone, addGoal }),
)(AddToggle);