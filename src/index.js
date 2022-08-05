import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ObjectList from './object_list';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      name: 'ShoppingCart'
    };
  }

  render() {
    return (
      <div>
          <ObjectList />
      </div>
    );
  }
}

render(<Index />, document.getElementById('root'));
