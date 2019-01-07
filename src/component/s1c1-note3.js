import React, { Component } from 'react';
import Collapsible from './collapsible';

class S1C1Note3 extends Component {
  render(){
    return (
      <div>
        <Collapsible linkId="note3" title="3. Hex in nibbles, base64 in sextets">
          <p><code>nibbles</code>, <code>sextets</code>, <code>bits</code>, and <code>bytes</code></p>

          <p>If these provocatively named terms are familiar to you, then all we'll be doing is grouping three nibbles into two evenly divisible sextets and then evaluating these sextets to their final base64 representations. Pretty simple and that's the gotcha</p>

          <p>Want a little more explanation (and some interesting history)? Say no more and keep reading.</p>

          <h4>Bits</h4>
          <p>Many folks will conclude that a bit stands for binary digit (binary information digit if you want to get the precise J.W. Tukey attribution).</p>

          <p>While this is true, you lose meaning by merely stopping there and not differentiating binary digit and bit. Since we will be dealing with Information Theory quite heavily this becomes a worthy detour for understanding that will help us in having the right mindset when we think about cryptography.</p>

          <p>Claude Shannon, the founder of Information Theory, explained that while a binary digit can be 1 or 0, or any expression of two binary states, a bit represents a maximum amount of information that can be conveyed. The example given is a pint of milk. The pint can hold between 1 and 0 pint of milk, so a binary digit convey between 1 and 0 information. Connecting these binary digits can increase the amount of information that can be shared at a rate of 2^n.</p>

          <p>This aides conversations in Quantum Computing when facing superpositions where quantum bits can be in both states simultaneously. One of the more famous explanations of this being Schrödingers Cat. We'll stop there regarding quantum computing. Just know the role it plays in cryptography is significant, one example leaving RSA completely broken through use of Shor's Algorithm which dismantles the core strength of RSA's intractibility.</p>

          <h4>Bytes</h4>
            <p>Let's hear from Bob Bemers explanation while he worked with Werner Bucholz at IBM (the man credited with coining the term). To do this we'll need to visit the <a href="https://web.archive.org/web/20180102193409/http://www.bobbemer.com/BYTE.HTM" _target="blank" rel="noreferrer noopener">internet archives</a>.</p>

            <p>What Beemer goes on to explain is really what you can surmise from the term itself. A bite of something is the amount taken a chunk at a time. Changing it to <b>byte</b> eliminates the possibility of mistaking similarly named bit and bite. So now we are in 1964, the wildly successful IBM 360 mainframe breaks onto the scene. It is passing 8 bit chunks around in parallel and we find Werner Bucholz 8-bit byte catches on. A byte and 8 bits are now synonymous.</p>

            <p>You will see a note from Beemer at the end where he never cared for the term and preferred referring to them in their bases (octects) which is now seen as the preferred term for clarity. Now with ISPs and how we differentiate selling of services with the Megabit(Mb) vs MegaByte(MB), it is permanently etched into the way we speak around transfer of information and bandwidth across networks. 8 Megabits is 1 MegaByte...sorry Bob.</p>

          <h4>Nibbles & Sextets</h4>
          <p></p>
        </Collapsible>
      </div>
    );
  }
}

export default S1C1Note3;
