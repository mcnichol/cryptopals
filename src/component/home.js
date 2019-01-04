import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
  render(){
    return (
      <div className="challenges">
        <h2>Challenge Set 1: The Basics</h2>
        <ol>
          <li><Link to="/s1c1">Convert Hex to Base64</Link></li>
          <li><Link to="/s1c2">Fixed XOR</Link></li>
          <li><Link to="/s1c3">Single-byte XOR cipher</Link></li>
          <li><Link to="/s1c4">Detect single-character XOR</Link></li>
          <li><Link to="/s1c5">Implement repeating-key XOR</Link></li>
          <li><Link to="/s1c6">Break repeating-key XOR</Link></li>
          <li><Link to="/s1c7">AES in ECB mode</Link></li>
          <li><Link to="/s1c8">Detect AES in ECB mode</Link></li>
        </ol>
      </div>
    );
  }
}

export default Home;
