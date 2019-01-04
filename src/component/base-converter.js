import React, { Component } from 'react';
import './base-converter.css';

class BaseConverter extends Component {
  constructor(props){
    super(props);

    this.state = {
      baseFrom: "base16",
      baseTo: "base10",
      inputConversion: "49",
      outputConversion: ""
    }
  }

  componentDidMount(){
    this.convert()
  }

  convert(){
    const from = this.state.baseFrom.slice(4);
    const to = this.state.baseTo.slice(4);
    const conversionFrom = this.state.inputConversion;
    var conversionTo = "";

    if(conversionFrom === ""){ return };

    if(to === "128"){
      switch(from){
        case "2":
        case "10":
            conversionTo = String.fromCharCode(parseInt(conversionFrom, from));
          break;
        case "16":
          conversionTo = conversionFrom.match(/\w{1,2}/g).map(function(x){return String.fromCharCode(parseInt(x, from));}).join("");
          break;
        case "128":
          conversionTo = conversionFrom;
          break;
        default:
          console.log("Error in base-converter#convert()");
      }
    } else if (from === "128"){
          conversionTo = conversionFrom.split("").map(function(x){return parseInt(x.charCodeAt()).toString(to);}).join("");
    } else {
      conversionTo = parseInt(conversionFrom, from).toString(to);
    }

    this.setState({
      outputConversion: conversionTo
    });
  }

  baseFrom(baseValue){
    this.setState({
      baseFrom: baseValue
    });

    setTimeout(()=>{this.convert()}, 1);
  }

  baseTo(baseValue){
    this.setState({
      baseTo: baseValue
    });

    setTimeout(()=>{this.convert()}, 1);
  }

  handleChange(e){
    this.setState({
      inputConversion: e.target.value
    });

    setTimeout((()=>{this.convert()}), 1);
  }

  render(){
    return(
      <div>
        <table>
          <thead>
            <tr>
              <td colSpan="2">Convert From</td>
              <td colSpan="2">Convert To</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className={`${this.state.baseFrom === 'base2' ? 'is-active' : '' }`} onClick={((e)=>{this.baseFrom("base2")})}>Binary</p>
                <p className={`${this.state.baseFrom === 'base10' ? 'is-active' : '' }`} onClick={((e)=>{this.baseFrom("base10")})}>Decimal</p>
                <p className={`${this.state.baseFrom === 'base16' ? 'is-active' : '' }`} onClick={((e)=>{this.baseFrom("base16")})}>Hexadecimal</p>
                <p className={`${this.state.baseFrom === 'base128' ? 'is-active' : '' }`} onClick={((e)=>{this.baseFrom("base128")})}>ASCII</p>
              </td>
              <td><input value={this.state.inputConversion} onChange={((e)=>{this.handleChange(e)})} /></td>
              <td>
                <p className={`${this.state.baseTo === 'base2' ? 'is-active' : '' }`} onClick={((e)=>{this.baseTo("base2")})}>Binary</p>
                <p className={`${this.state.baseTo === 'base10' ? 'is-active' : '' }`} onClick={((e)=>{this.baseTo("base10")})}>Decimal</p>
                <p className={`${this.state.baseTo === 'base16' ? 'is-active' : '' }`} onClick={((e)=>{this.baseTo("base16")})}>Hexadecimal</p>
                <p className={`${this.state.baseTo === 'base128' ? 'is-active' : '' }`} onClick={((e)=>{this.baseTo("base128")})}>ASCII</p>
              </td>
              <td><div>{this.state.outputConversion}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BaseConverter;
