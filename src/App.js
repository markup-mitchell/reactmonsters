import React, { Component } from 'react';
// import PartBox from './PartBox';
import DestBox from './DestBox';
import HeadData from './HeadData';
import PartRow from './PartRow';
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
        <PartRow id='head' handler={this.drag} array={HeadData} />
        {/*<PartBox id={HeadData[0].name} handler={this.drag.bind(this)} url={HeadData[0].img} alt="kitten"/>*/}
        <DestBox onDrop={this.drop.bind(this)} allowDrop={this.allowDrop.bind(this)}/>
        <DestBox onDrop={this.drop.bind(this)} allowDrop={this.allowDrop.bind(this)}/>
        <DestBox onDrop={this.drop.bind(this)} allowDrop={this.allowDrop.bind(this)}/>
        <DestBox onDrop={this.drop.bind(this)} allowDrop={this.allowDrop.bind(this)}/>
        <DestBox onDrop={this.drop.bind(this)} allowDrop={this.allowDrop.bind(this)}/>
      </div>
    );
  }
}

export default App;
