import React, { Component } from 'react';
import Collapsible from './collapsible';

class S1C1Note3 extends Component {
  render(){
    return (
      <div>
        <Collapsible linkId="note3" title="3. Hex in nibbles, base64 in sextets">
          <p><code>nibbles</code>, <code>sextets</code>, <code>bits</code>, and <code>bytes</code></p>

          <p>If these provocatively named things are familiar to you, then short of knowing that we need to take three 4 bit hex nibbles, group them to be divided into two 6 bit sextets, and then evaluate these 6 bit sextets to have our final base64 representations....you can move on from this section.</p>

          <p>Want a little more explanation (and some interesting history)? Good, I want to give it to you so just keep reading.</p>

          <h4>Bits</h4>
          <p>Many folks will conclude that a bit stands for binary digit (binary information digit if you want to get the precise J.W. Tukey attribution).</p>
          
          <p>While this is true, you lose meaning by merely stopping there and not differentiating binary digit and bit. Since we will be dealing with Information Theory quite heavily this becomes a worthy detour for understanding that will help us in having the right mindset when we think about cryptography.</p>

          <p>Claude Shannon, the founder of Information Theory, explained that although a binary digit can be 1 or 0, or any expression of two binary states, a bit represents a maximum amount of information that can be conveyed. The example given is a pint of milk. The pint can hold between 1 pint and zero milk, so can a binary digit convey between 1 and 0 information.</p>

          <p>This devolves easily into Quantum Computing where we deal with superpositions where quantom bits can be in both states simultaneously. One of the more famous explanations of this being Schrödingers Cat. We'll stop there regarding quantum computing but I can assure you the role it plays in Cryptography is significant with RSA completely broken through the quantum implementation of Shor's Algorithm which dismantles the intractable RSA algorithm, intractability being one of the keys in RSAs strength.</p>

          <h4>Bytes</h4>
            To learn it from Bob Bemer himself we'll have to visit the internet archives.
http://www.bobbemer.com/BYTE.HTM
          <h4>Nibbles & Sextets</h4>
        </Collapsible>
      </div>
    );
  }
}

export default S1C1Note3;
