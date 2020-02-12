import React, { Component } from 'react';
import Collapse from "react-bootstrap/Collapse";
import AddToggle from '../../components/AddToggle';
import AddNew from '../AddModal';
import "./style.css";
import RemoveBtn from '../RemoveBtn';

export default class Comment extends Component {

  render() {
    return (
      <div className="comment-container">
        <div className="task-block" blocktype="comment">
          <button className="plus-button" onClick={this.props.toggle}>{this.props.on ? "-" : "+"}</button>
          {this.props.task.text}
          <AddToggle addNewItem={this.props.addNewItem} >
            {({ show, toggle, onSubmit, blocktype }) => (
              <AddNew show={show} toggle={toggle} onSubmit={onSubmit} blocktype={blocktype} />
            )}
          </AddToggle>
          <RemoveBtn />
        </div>
        <Collapse in={this.props.on}>
          { this.props.task.comments.length
            ? <div className="comment-wrapper">
                <div className="comment-header">Comments</div>
                {this.props.task.comments.map((comment, idx) => (
                  <div key={idx} className="comment-div" commentid={comment._id}>
                    <div className="comment-block" blocktype="note">
                      <span className="font-weight-bold">{comment.name}:</span>&nbsp;&nbsp; {comment.text}
                      <RemoveBtn />
                    </div>
                  </div>
                ))}
              </div>
            : <div className="comment-wrap">
                <div className="comment-header" blocktype="comment">Add a New Comment
                  <AddToggle addNewItem={this.props.addNewItem} >
                    {({ show, toggle, onSubmit, blocktype }) => (
                      <AddNew show={show} toggle={toggle} onSubmit={onSubmit} blocktype={blocktype} />
                    )}
                  </AddToggle>
                </div>
              </div>
          } 
        </Collapse>
      </div>
    )
  }
}
