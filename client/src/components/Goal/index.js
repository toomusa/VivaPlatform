import React, { Component } from 'react';
import Collapse from "react-bootstrap/Collapse";
import Toggle from "../Toggle";
import Milestone from "../Milestone";
import AddToggle from '../../components/AddToggle';
import AddNew from '../AddModal';
import "./style.css";

export default class Goal extends Component {

  render() {
    return (
      <div className="goal-container">
        <div className="journey-block" blocktype="goal" onClick={this.props.toggle}>
          {this.props.journey.text}
        </div>
        <Collapse in={this.props.on}>
          <div>
            { this.props.journey.goals.length
              ? <span className="new-goal float-right" blocktype="goal">
                  <span className="new-box">New Life Goal &nbsp;</span>
                  <AddToggle addNewItem={this.props.addNewItem} >
                    {({ show, toggle, onSubmit, blocktype }) => (
                      <AddNew show={show} toggle={toggle} onSubmit={onSubmit} blocktype={blocktype} />
                    )}
                  </AddToggle>
                </span>
              : <span></span>  
            }
            { this.props.journey.goals.length
              ? <div className="goal-wrapper">
                  <div className="goal-header">Life Goals</div>
                  {this.props.journey.goals.map((goal, idx) => (
                    <div key={idx} className="goal-div" goalid={goal._id}>
                      <Toggle>
                        {({ on, toggle, addNewItem }) => (
                          <Milestone on={on} toggle={toggle} addNewItem={addNewItem} goal={goal} />
                        )}
                      </Toggle>
                    </div>
                  ))}
                </div>
              : <div className="goal-wrap">
                  <div className="goal-header text-right d-flex justify-content-center" blocktype="goal">Add a New Life Goal &nbsp;
                    <AddToggle addNewItem={this.props.addNewItem} >
                      {({ show, toggle, onSubmit, blocktype }) => (
                        <AddNew show={show} toggle={toggle} onSubmit={onSubmit} blocktype={blocktype} />
                      )}
                    </AddToggle>
                  </div>
                </div>
            }
          </div>
        </Collapse>
      </div>
    )
  }
}
