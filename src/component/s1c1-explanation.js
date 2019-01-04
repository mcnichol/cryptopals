import React, { Component } from 'react';
import S1C1Note1 from './s1c1-note1';
import S1C1Note2 from './s1c1-note2';
import S1C1Note3 from './s1c1-note3';
import S1C1Note4 from './s1c1-note4';

class S1C1Explanation extends Component {
  render(){
    return (
      <div>
        <h2>Explanation</h2>
        <p>
          This is a gentle on-ramp helping developers shine light on the fact that flipping from various encodings and working on the raw bytes will be a key aspect in building our understanding from the ground up.
        </p>
        <p>A few things to note:</p>
        <ol>
          <li><a href="#note1">Hexadecimal==base 16, base64==base 64</a></li>
          <li><a href="#note2">Hex encoded ASCII values utilize one octet for each ASCII character</a></li>
          <li><a href="#note3">Hex is nibbles; base64 is sextets</a></li>
          <li><a href="#note4">Converting from Hex to base64 doesn't require intermediary encodings</a></li>
        </ol>
        <S1C1Note1 />
        <S1C1Note2 />
        <S1C1Note3 />
        <S1C1Note4 />
      </div>
    );
  }
}

export default S1C1Explanation;
