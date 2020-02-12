import React, { Component } from 'react';
import Collapse from "react-bootstrap/Collapse";
import Toggle from "../Toggle";
import Comment from "../Comment";
import AddToggle from '../../components/AddToggle';
import AddNew from '../AddModal';
import "./style.css";
import RemoveBtn from '../RemoveBtn';

export default class Task extends Component {

  render() {
    return (
      <div className="task-container">
        <div className="milestone-block" blocktype="task">
          <button className="plus-button" onClick={this.props.toggle}>{this.props.on ? "-" : "+"}</button>
          {this.props.milestone.text}
          <AddToggle addNewItem={this.props.addNewItem} >
            {({ show, toggle, onSubmit, blocktype }) => (
              <AddNew show={show} toggle={toggle} onSubmit={onSubmit} blocktype={blocktype} />
            )}
          </AddToggle>
          <RemoveBtn />
        </div>
        <Collapse in={this.props.on}>
          { this.props.milestone.tasks.length
            ? <div className="task-wrapper">
                <div className="task-header">Tasks</div>
                {this.props.milestone.tasks.map((task, idx) => (
                  <div key={idx} className="task-div" taskid={task._id}>
                    <Toggle>
                      {({ on, toggle, addNewItem }) => (
                        <Comment on={on} toggle={toggle} addNewItem={addNewItem} task={task} />
                      )}
                    </Toggle>
                  </div>
                ))}
              </div>
            : <div className="task-wrap">
                <div className="task-header" blocktype="task">Add a New Task
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
