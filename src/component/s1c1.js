import React, { Component } from 'react'
import Collapsible from './collapsible'
import './s1c1.css'

class S1C1 extends Component {

  constructor(props){
    super(props);

  }

  render(){

    return (
      <div>
        <h1>Convert <code>hex</code> to <code>base64</code></h1>
        <h2>Challenge:</h2>
        <p>
          User must convert this hex value:
        </p>
        <code>49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d</code>
        <p>
          to this base64 value:
        </p>
        <code>SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t</code>
        <h2>Solution</h2>
        <p>
          @TODO - Input Text Entry / Output Textfield w/Backend Selection option
        </p>
        <h2>Explanation</h2>
        <p>
          This is a gentle on-ramp helping developers shine light on the fact that flipping from various encodings and working on the raw bytes will be a key aspect in building our understanding from the ground up.
        </p>
        <p>A few things to note:</p>
        <ol>
          <li><a href="#note1">Hex is base 16, base64 aptly named is base 64</a></li>
          <li>Hex encoded ASCII values utilize one octet for each ASCII character</li>
          <li>Each Hex value is a nibble whereas base64 operates in sextets. This means 3 Hex values (3x4=12 bits) can be expressed with two sextets (2x6=12 bits)</li>
          <li>A more human readable form would be ASCII and an easy solvable view would be binary, but neither are required intermediaries in order to convert directly from Hex to base64</li>
        </ol>
        <Collapsible linkId="note1" title="1. Hex is base16, base64 is base64">
          <p>
            Hex being base 16 is more precisely referred to as <a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank" rel="noopener noreferrer">Hexadecimal</a>.  Hex (6) && Decimal (10).  This means that there are 16 possible values before we roll over to 10.  Compare this to <a href="https://en.wikipedia.org/wiki/Binary_number" target="_blank" rel="noopener noreferrer">binary</a> where there are only 2 values (1 || 0) before we roll over to 10. For reference that most are likely familiar with, decimal values number 0 - 9 before we roll over to 10.
          </p>
          <p>
            Shown below is a table detailing each value as represented respective to it's base system.
          </p>
          <table>
            <thead>
              <tr>
                <th>Binary</th>
                <th>Decimal</th>
                <th>Hexadecimal</th>
                <th>Base 64</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>A</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>B</td>
              </tr>
              <tr>
                <td>10</td>
                <td>2</td>
                <td>2</td>
                <td>C</td>
              </tr>
              <tr>
                <td>11</td>
                <td>3</td>
                <td>3</td>
                <td>D</td>
              </tr>
              <tr>
                <td>100</td>
                <td>4</td>
                <td>4</td>
                <td>E</td>
              </tr>
              <tr>
                <td>101</td>
                <td>5</td>
                <td>5</td>
                <td>F</td>
              </tr>
              <tr>
                <td>110</td>
                <td>6</td>
                <td>6</td>
                <td>G</td>
              </tr>
              <tr>
                <td>111</td>
                <td>7</td>
                <td>7</td>
                <td>H</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>8</td>
                <td>8</td>
                <td>I</td>
              </tr>
              <tr>
                <td>1001</td>
                <td>9</td>
                <td>9</td>
                <td>J</td>
              </tr>
              <tr>
                <td>1010</td>
                <td>10</td>
                <td>A</td>
                <td>K</td>
              </tr>
              <tr>
                <td>1011</td>
                <td>11</td>
                <td>B</td>
                <td>L</td>
              </tr>
              <tr>
                <td>1100</td>
                <td>12</td>
                <td>C</td>
                <td>M</td>
              </tr>
              <tr>
                <td>1101</td>
                <td>13</td>
                <td>D</td>
                <td>N</td>
              </tr>
              <tr>
                <td>1110</td>
                <td>14</td>
                <td>E</td>
                <td>O</td>
              </tr>
              <tr>
                <td>1111</td>
                <td>15</td>
                <td>F</td>
                <td>P</td>
              </tr>
              <tr>
                <td>10000</td>
                <td>16</td>
                <td>10</td>
                <td>Q</td>
              </tr>
            </tbody>
          </table>
          <p>
            Notice how Base 64 starts at A and progresses through the alphabet.  What is not shown merely due to space is it then proceeds to leverage a-z,0-9,+,/ equalling 64 representations for its values. Additionally note I showed capitalized and lowercase letters. This is because they both represent distinct values.
          </p>
          <p>
            *Note: I never waste a moment to throw in a relevant <a href="https://xkcd.com/953/" target="_blank" rel="noopener noreferrer">XKCD</a>. Feel free to tell me on <a href="http://twitter.com/home?status=@codingtogether, I laughed till I cried: https://xkcd.com/953" target="_blank" rel="noopener noreferrer">Twitter</a> just how hilarious that was and how my sense of humor is your spirit animal. That being said (and likely not needing explanation), all of the numbers referenced above were relative to communication around the decimal system.
          </p>
        </Collapsible>
      </div>
    );
  }
}

export default S1C1;
