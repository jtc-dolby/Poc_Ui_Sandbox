import React, { Component } from "react";
//import { render } from 'react-dom';
import "./style.css";

class ObjectItem extends Component {
  //constructor() {
  //  super();
  //}

  render() {
    return (
      <div className="alert alert-info">
        <span>{this.props.object.description}</span>
        X:{" "}
        <input
          type="range"
          id="xSlider"
          value={this.props.object.x}
          min="0"
          max="100"
          onChange={(event) => this.props.onXChange(this.props.object, event)}
        />
        Y:{" "}
        <input
          type="range"
          id="ySlider"
          value={this.props.object.y}
          min="0"
          max="100"
          onChange={(event) => this.props.onYChange(this.props.object, event)}
        />
        Z:{" "}
        <input
          type="range"
          id="zSlider"
          value={this.props.object.z}
          min="0"
          max="100"
          onChange={(event) => this.props.onZChange(this.props.object, event)}
        />
      </div>
    );
  }
}

export default ObjectItem;
