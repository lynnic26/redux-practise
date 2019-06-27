import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import World from './World'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello />
        <World />
        <p>
          在World 组件中点击按钮，并触发一个dispatch，在Hello组件可以订阅store的状态变更并显示更新后的状态
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
