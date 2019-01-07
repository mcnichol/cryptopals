import React, { Component } from 'react';

class S1C1Solution extends Component {
  render(){
    return (
      <div>
        <h2>Solution</h2>
        <div>Language: <span id="lang-go">Go</span> <span id="lang-java">Java</span> <span id="lang-js">Node/Express.js</span> <span id="lang-python">Python</span></div>
        <div>IaaS: <span id="iaas-aws">AWS</span> <span id="iaas-azure">Azure</span> <span id="iaas-gcp">GCP</span> <span id="iaas-vsphere">vSphere</span></div>
        <p>Hex Input: <input /></p>
        <p>base64 Output: <code>Value</code></p>
      </div>
    );
  }
}

export default S1C1Solution;
