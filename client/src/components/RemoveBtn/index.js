import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import { removeComment, removeTask, removeMilestone, removeGoal } from "../../actions/apiActions";
import "./style.css";

class RemoveBtn extends Component {

  removeItem = e => {
    const btn = e.target;
    const blocktype = btn.parentElement.attributes.blocktype.value;
    let commentId, taskId, milestoneId, goalId, journeyId, refDoc, confirmed;

    switch (blocktype) {
      case "note":
        // removing comment
        commentId = btn.closest(".comment-div").attributes.commentid.value
        taskId = btn.closest(".task-div").attributes.taskid.value
        milestoneId = btn.closest(".milestone-div").attributes.milestoneid.value
        goalId = btn.closest(".goal-div").attributes.goalid.value
        journeyId = btn.closest(".journey-div").attributes.journeyid.value 
        refDoc = { commentId, taskId, milestoneId, goalId, journeyId };
        confirmed = window.confirm("Are you sure you want to delete this comment?")
        confirmed && this.props.removeComment(refDoc)
        break;
      case "comment":
        // removing task
        taskId = btn.closest(".task-div").attributes.taskid.value
        milestoneId = btn.closest(".milestone-div").attributes.milestoneid.value
        goalId = btn.closest(".goal-div").attributes.goalid.value
        journeyId = btn.closest(".journey-div").attributes.journeyid.value
        refDoc = { taskId, milestoneId, goalId, journeyId };
        confirmed = window.confirm("Are you sure you want to delete this task?")
        confirmed && this.props.removeTask(refDoc)
        break;
      case "task":
        // removing milestone
        milestoneId = btn.closest(".milestone-div").attributes.milestoneid.value
        goalId = btn.closest(".goal-div").attributes.goalid.value
        journeyId = btn.closest(".journey-div").attributes.journeyid.value
        refDoc = { milestoneId, goalId, journeyId };
        confirmed = window.confirm("Are you sure you want to delete this milestone?")
        confirmed && this.props.removeMilestone(refDoc)
        break;
      case "milestone":
        // removing goal
        goalId = btn.closest(".goal-div").attributes.goalid.value
        journeyId = btn.closest(".journey-div").attributes.journeyid.value
        refDoc = { goalId, journeyId };
        confirmed = window.confirm("Are you sure you want to delete this life goal?")
        confirmed && this.props.removeGoal(refDoc)
        break;   
      default:
        break;
    }
  }

  render() {
    return (
      <button className="remove-button" onClick={this.removeItem}>X</button>
    )
  }
}

function mapStateToProps() {
  return {};
}

export default compose(
  connect(mapStateToProps, { removeComment, removeTask, removeMilestone, removeGoal }),
)(RemoveBtn);