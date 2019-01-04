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
          <li><a href="#note1">Hex is base 16, base64 aptly named is base 64</a></li>
          <li><a href="#note2">Hex encoded ASCII values utilize one octet for each ASCII character</a></li>
          <li><a href="#note3">Each Hex value is a nibble whereas base64 operates in sextets. This means 3 Hex values (3x4=12 bits) can be expressed with two sextets (2x6=12 bits)</a></li>
          <li><a href="#note4">A more human readable form would be ASCII and an easy solvable view would be binary, but neither are required intermediaries in order to convert directly from Hex to base64</a></li>
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
