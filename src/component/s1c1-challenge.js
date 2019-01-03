import React, { Component } from 'react';

class S1C1Challenge extends Component {
  render(){
    return (
      <div>
        <h2>Challenge:</h2>
        <p>
          User must convert this hex value:
        </p>
      <code>49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d</   code>
        <p>
          to this base64 value:
        </p>
        <code>SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t</code>
      </div>
    );
  }
}

export default S1C1Challenge;
