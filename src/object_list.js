import React, { Component } from "react";
//import { render } from "react-dom";
import "./style.css";
import ObjectItem from "./object_item";

class ObjectList extends Component {
  constructor() {
    super();
    this.state = {
      objects: [
        {
          description: "object 1",
          id: 1,
          x: 0,
          y: 100,
          z: 0,
          size: 50,
          brm: "mid"
        },
        {
          description: "object 2",
          id: 2,
          x: 0,
          y: 100,
          z: 0,
          size: 50,
          brm: "mid"
        },
        {
          description: "object 3",
          id: 3,
          x: 0,
          y: 100,
          z: 0,
          size: 50,
          brm: "mid"
        },
        {
          description: "object 4",
          id: 4,
          x: 0,
          y: 100,
          z: 0,
          size: 50,
          brm: "mid"
        },
        {
          description: "object 5",
          id: 5,
          x: 0,
          y: 100,
          z: 0,
          size: 50,
          brm: "mid"
        }
      ],
      objectCount: 5
    };
  }

  onResetHandler = () => {
    var cloneObjects = [...this.state.objects];
    for (var i = 0; i <= cloneObjects.length - 1; i++) {
      cloneObjects[i].x = 0;
      cloneObjects[i].y = 100;
      cloneObjects[i].z = 0;
      cloneObjects[i].size = 50;
      cloneObjects[i].brm = "mid";
    }

    this.setState({ items: cloneObjects });
    this.setState({ objectCount: 0 });
  };

  handleXChange = (object, event) => {
    var cloneObjects = [...this.state.objects];
    var index = cloneObjects.indexOf(object);
    this.setState({ value: event.target.value });
    cloneObjects[index].x = event.target.value;
  };

  handleYChange = (object, event) => {
    var cloneObjects = [...this.state.objects];
    var index = cloneObjects.indexOf(object);
    this.setState({ value: event.target.value });
    cloneObjects[index].y = event.target.value;
  };

  handleZChange = (object, event) => {
    var cloneObjects = [...this.state.objects];
    var index = cloneObjects.indexOf(object);
    this.setState({ value: event.target.value });
    cloneObjects[index].z = event.target.value;
  };

  ObjectCount = () => {
    return this.objectCount;
  };

  componentDidMount = () => {
    var count = this.ObjectCount();
    this.setState({ ObjectCount: count });
  };

  render() {
    return (
      <div className="object">
        <span
          title="Reset Object"
          className="btn float-right object-reset"
          onClick={this.onResetHandler}
        >
          Reset
        </span>
        <div className="cart-header">
          <span className="badge badge-pill badge-info">
            Number of Objects: {this.state.objectCount}
          </span>
        </div>
        {this.state.objects.map((object) => (
          <ObjectItem
            key={object.id}
            object={object}
            onXChange={this.handleXChange}
            onYChange={this.handleYChange}
            onZChange={this.handleZChange}
          />
        ))}
      </div>
    );
  }
}

export default ObjectList;
