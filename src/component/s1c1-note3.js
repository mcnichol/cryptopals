import React, { Component } from 'react';
import Collapsible from './collapsible';

class S1C1Note3 extends Component {
  render(){
    return (
      <div>
        <Collapsible linkId="note3" title="3. Hex in nibbles, base64 in sextets">
          <p><code>nibbles</code>, <code>sextets</code>, <code>bits</code>, and <code>bytes</code></p>

          <p>If these provocatively named terms are already well known to you, then I will summarize here. <b>We will be grouping three hex values into two sextets and then storing them off in their final base64 representations.</b></p>

          <p>This is the gotcha we were referring to earlier. Feel free to skip onto the next section where we move from hex -> base64 in a single shot using bitmasks, or continue reading to get some background on any of the terms that may be unfamiliar to you alongside their etymology.</p>

          <h4>Bits</h4>
          <p>It may seem obvious to some that the term <i>bit</i> is merely short for <i>binary digit</i>. This term actually holds a greater secret which will help us on our journey. The term bit was first used by Claude Shannon in his seminal 1948 paper <a href="http://math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf" target="_blank" rel="noreferrer noopener">A Mathematical Theory of Communication</a> (where he credits <a href="https://en.wikipedia.org/wiki/John_Tukey" target="_blank" rel="noreferrer noopener">J.W. Tukey</a> for creation of the term).</p>

          <p>While bit and binary digit are often used interchangeably, the bit has the ability to convey much more information. Since we'll continue seeing Information Theory throughout our journey, lets take a couple more paragraphs to discuss one layer deeper and highlight just how important bits will be to us. I promise it will be worth it.</p>

          <p>Claude Shannon, the founder of Information Theory, explained that while a binary digit can be 1 or 0, a bit goes further in representing a maximum amount of information that can be conveyed. The example given is a pint of milk. A pint can hold between 0 and 1 pint of milk, similar to how a binary digit can convey between 0 and 1 information. Bits are the measurement of how much information can be conveyed at a rate of 2^n.</p>

          <p>This can help with conversations around quantum computing when dealing with superpositions, an event where a bit can be in both states simultaneously, enables algoithms to perform computations that were once not possible. For example, Shor's Algorithm could now perform multiple prime factorizations in parallel destroying the intractability of RSA. RSA being the encryption algorithm used to secure your Github repo, most servers around the world...you can say goodbye to bitcoin.</p>

          <p>A famous demonstration of superpositions would be Schrödingers Cat. A thought experiment where a cat is placed in a closed box with poison. It is alive only until you open the box and observe that it is dead. One can argue that it is in a state of being both alive and dead. We won't go further into quantum computing, just know the role it plays in cryptography is significant and information theory helps us understand these hard to grasp concepts. Bits are the key in helping us understand the information required to get there.</p>

          <h4>Bytes</h4>
            <p>Let's hear from Bob Bemers explanation while he worked with Werner Bucholz at IBM (the man credited with coining the term). To do this we'll need to visit the <a href="https://web.archive.org/web/20180102193409/http://www.bobbemer.com/BYTE.HTM" _target="blank" rel="noreferrer noopener">internet archives</a>.</p>

            <p>What Beemer goes on to explain is really what you can surmise from the term itself. A bite of something is the amount taken a chunk at a time. Changing it to <b>byte</b> eliminates the possibility of mistaking similarly named bit and bite. So now we are in 1964, the wildly successful IBM 360 mainframe breaks onto the scene. It is passing 8 bit chunks around in parallel and we find Werner Bucholz 8-bit byte catches on. A byte and 8 bits are now synonymous.</p>

            <p>You will see a note from Beemer at the end where he never cared for the term and preferred referring to them in their bases (octets) which is now seen as the preferred term for clarity. Now with ISPs and how we differentiate selling of services with the Megabit(Mb) vs MegaByte(MB), it is permanently etched into the way we speak around transfer of information and bandwidth across networks. 8 Megabits is 1 MegaByte...sorry Bob.</p>

          <h4>Nibbles & Sextets</h4>
          <p>Nibbles (sometimes spelled Nybble or Nyble to mirror it's byte relatives) have a history similar to that of the byte. Where it used to represent half a byte regardless of base, today it is commonly in reference to 4 bits, half the quantity of the ubiquitously termed 8-bit byte.</p>
          <p>So who coined the term? There's an anecdote on how Professor David B. Benson used it jokingly in the late 50's at Los Alamos and another reference from Citibank implementing their own pre-ISO 8583 standard which used NABBLES for communication. At this point, it's been un-owned long enough that we can call it public domain.</p>

          <p>We'll wrap up with this one liner on Sextets and the gotcha we discussed earlier. Sextets is an expression of 6 bits which are capable of holding 2^6 (64) values, the conveniently exact size we need for base64.</p>

          <p>An issue arises when we want to convert these 4-bit hex "nibbles" into 6-bit base64 "sextets". You see we cannot convert a hex at a time. The reason is because there are 4 bits, so we are two short of a 6-bit sextet. So let's grab another hex value. Now we have 8 bits in series but we are 2 bits too long.</p>

          <p>Just like when dealing with XML and anger, if you're not seeing the results you're looking for, just use more!</p>

          <p>With a third hex value rounding us out to 12 bits we can now cleanly convert our three nibbles into two sextets.</p>
        </Collapsible>
      </div>
    );
  }
}

export default S1C1Note3;
