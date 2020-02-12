import React, { Component } from 'react';
import Collapse from "react-bootstrap/Collapse";
import Toggle from "../Toggle";
import Task from "../Task";
import AddToggle from '../../components/AddToggle';
import AddNew from '../AddModal';
import RemoveBtn from '../../components/RemoveBtn';
import "./style.css";

export default class Milestone extends Component {

  render() {
    return (
      <div className="milestone-container">
        <div className="goal-block" blocktype="milestone">
          <button className="plus-button" onClick={this.props.toggle}>{this.props.on ? "-" : "+"}</button>
          {this.props.goal.text}
          <AddToggle addNewItem={this.props.addNewItem} >
            {({ show, toggle, onSubmit, blocktype }) => (
              <AddNew show={show} toggle={toggle} onSubmit={onSubmit} blocktype={blocktype} />
            )}
          </AddToggle>
          <RemoveBtn />
        </div>
        <Collapse in={this.props.on}>
          { this.props.goal.milestones.length
            ? <div className="milestone-wrapper">
                <div className="milestone-header">Milestones</div>
                {this.props.goal.milestones.map((milestone, idx) => (
                  <div key={idx} className="milestone-div" milestoneid={milestone._id}>
                    <Toggle>
                      {({ on, toggle, addNewItem }) => (
                        <Task on={on} toggle={toggle} addNewItem={addNewItem} milestone={milestone} />
                      )}
                    </Toggle>
                  </div>
                ))}
              </div>
            : <div className="milestone-wrap">
                <div className="milestone-header" blocktype="milestone">Add a New Milestone
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
