import React, { Component } from 'react';
import "./s1c1-solution.css";

class S1C1Solution extends Component {

  constructor(props){
    super(props);

    this.state = {
      hexInput: "",
      base64LocalJS: "",
      base64Go: "",
      base64Java: "",
      base64JS: "",
      base64Python: "",
      language: "local-js"
    }
  }

  localSolution(hex){
    let base64EncodedVal = "";

    if(hex !== ""){
      base64EncodedVal = btoa(hex.match(/\w{2}/g).map(function(x){return String.fromCharCode(parseInt(x, 16));}).join(""));
    }

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

  handleLanguageToggle(langVal){
    this.setState({
      language: langVal
    });
  }

  render(){
    return (
      <div className="solution">
        <h2>Solution</h2>
        <div id="choose-lang" className="selection">
          <h4>Select Language:</h4>
          <ul className="selection-container">
            <li id="lang-local-js" className={`${this.state.language === 'local-js' ? 'is-active' : ''}`} onClick={(()=>{this.handleLanguageToggle("local-js")})}>Local JS</li>
            <li id="lang-go" className={`${this.state.language === 'go' ? 'is-active' : ''}`} onClick={(()=>{this.handleLanguageToggle("go")})}>Go</li>
            <li id="lang-java" className={`${this.state.language === 'java' ? 'is-active' : ''}`} onClick={(()=>{this.handleLanguageToggle("java")})}>Java</li>
            <li id="lang-js" className={`${this.state.language === 'js' ? 'is-active' : ''}`} onClick={(()=>{this.handleLanguageToggle("js")})}>Node/Express.js</li>
            <li id="lang-python" className={`${this.state.language === 'python' ? 'is-active' : ''}`} onClick={(()=>{this.handleLanguageToggle("python")})}>Python</li>
          </ul>
        </div>
        <div id="choose-iaas" className="selection">
          <h4>Select IaaS:</h4>
          <ul className="selection-container">
            <li><div id="iaas-aws">AWS</div></li>
            <li><div id="iaas-azure">Azure</div></li>
            <li><div id="iaas-gcp">GCP</div></li>
            <li><div id="iaas-vsphere">vSphere</div></li>
          </ul>
        </div>
        <br/>
        <div>
          <p><b>Hex Input:</b><input value={this.state.hexInput} onChange={((e)=>{this.handleInput(e)})}/><button onClick={(()=>{this.localSolution(this.state.hexInput)})}>Submit</button></p>
        </div>
        <div>
          <b>base64 Output:</b>
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
