import React, { Component } from 'react';

class S1C1Solution extends Component {

  constructor(props){
    super(props);

    this.state = {
      hexInput: "",
      base64LocalJS: "Empty",
      base64Go: "Empty",
      base64Java: "Empty",
      base64JS: "Empty",
      base64Python: "Empty",
    }
  }

  localSolution(hex){
    let base64EncodedVal = btoa(hex.match(/\w{2}/g).map(function(x){return String.fromCharCode(parseInt(x, 16));}).join(""));

    this.setState({
      base64LocalJS: base64EncodedVal
    });
  }

  handleInput(e){
    e.preventDefault();

    this.setState({
      hexInput: e.target.value
    });
  }

  render(){
    return (
      <div>
        <h2>Solution</h2>
        <div><b>Language:</b>
          <div id="lang-local-js">Local JavaScript</div>
          <div id="lang-go">Go</div>
          <div id="lang-java">Java</div>
          <div id="lang-js">Node/Express.js</div>
          <div id="lang-python">Python</div>
        </div>
        <div><b>IaaS:</b>
          <div id="iaas-aws">AWS</div>
          <div id="iaas-azure">Azure</div>
          <div id="iaas-gcp">GCP</div>
          <div id="iaas-vsphere">vSphere</div>
        </div>
        <p>Hex Input: <input value={this.state.hexInput} onChange={((e)=>{this.handleInput(e)})}/><button onClick={(()=>{this.localSolution(this.state.hexInput)})}>Submit</button></p>
        <div>base64 Output:
          <div id="base64-local-js"><code>{this.state.base64LocalJS}</code></div>
          <div id="base64-go"><code>{this.state.base64Go}</code></div>
          <div id="base64-java"><code>{this.state.base64Java}</code></div>
          <div id="base64-js"><code>{this.state.base64JS}</code></div>
          <div id="base64-python"><code>{this.state.bas64Python}</code></div>
        </div>
      </div>
    );
  }
}

export default S1C1Solution;
