import React, { Component } from 'react';
import DestGrid from './DestGrid';
import HeadData from './HeadData';
import PartGrid from './PartGrid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heads: HeadData.map((head) => head.img)
    };
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  render() {
    return (
      <div className="App">
        <PartGrid array={HeadData} handler={this.drag} />
        <DestGrid onDrop={this.drop.bind(this)} allowDrop={this.allowDrop.bind(this)} />
        {/*<DestBox onDrop={this.drop.bind(this)} allowDrop={this.allowDrop.bind(this)}/>*/}
      </div>
    );
  }
}

export default App;
