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

          <p>Many folks will conclude that a bit essentially represents a binary digit (binary information digit if you want to get the precise J.W. Tukey attribution although few will argue with you). While this is true, you lose a little bit of the meaning by merely stopping there and differentiating the binary digit and bits. Since we will be dealing with Information Theory quite heavily this becomes a worthy detour for understanding that will help us in having the right mindset when we think about cryptography.</p>

          <p>Claude Shannon, the founder of Information Theory, explained that although a binary digit can be on or off, 1 or 0, or any expression of two binary states, bit's represent the maximum quantity of information that can be contained therein. The example given is a pint of milk.  </p>
        </Collapsible>
      </div>
    );
  }
}

export default S1C1Note3;
