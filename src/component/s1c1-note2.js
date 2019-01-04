import React, { Component } from 'react';
import Collapsible from './collapsible';
import BaseConverter from './base-converter';

class S1C1Note2 extends Component {
  render(){
    return (
      <div>
        <Collapsible linkId="note2" title="2. Hex Encoded ASCII" >
          <p>Although we will look at how Hex encodings are translated to ASCII, it won't be the final state in what we're looking to accomplish. It will however provide some valuable practice (if not already proficient) in changing encodings and cycling through various bases to set us up for a little exercise and understanding.</p>

          <p>To add to this there is a staple article enthusiastically named: <a href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/" target="_blank" rel="noopener noreferrer">The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets</a>.  It's a great article from an even greater Joel Spolsky, co-founder of a personal favorite Trello and CEO of S/O. You can see from the opinionated title that it pulls no punches while providing good history on Unicode. This is a step ahead of where we're going right now so bookmark it for some future required reading.</p>

          <p>TL;DR - ASCII is a character encoding standard for how data is passed around. It is 7bits in length meaning it can hold 128 (2^7) characters. A single byte having 8 bits means there is opportunity for a parity bit but we won't get that detailed in this explanation (Thanks Joel). Let's break down the hex string into smaller components in relation to how it evaluates in ASCII.  This way we can make a little more sense of the data it carries that WE care about while building on where the previous section left off.  Remember the table displaying the various bases (2, 10, 16, 64) in the previous section. This does a nice job of showing the relationship between each bases values.</p>

          <p>Taking the first two hex values we must convert we have: <code>49</code></p>

          <p>You will also notice in the entire hex string you will never see a value outside of the characters 0-9 or a-f. Referencing the table again, these are all the values necessary to represent each character starting at '0' and ending at 'f' when dealing with hexadecimal.</p>

          <p>When representing any hexadecimal value in binary we need four bits for every possible value from 0 - 15, or in it's own representation, 0-f.  We can calculate the minimum bits necessary by expanding in powers of 2. 2^4 = 16 meaning we have 16 unique configurations when using 4 bits (binary digits). We now have a representation for each "decimal value" 0-15 or more appropriately "hex value" 0-f. As a paper and pencil exercise let's write these values out.</p>

          <p>0x04 is equivalent to binary: <code>0100</code>. That's a 0 in the 8's place, a 1 in the 4's place, a 0 in the 2's place and a 0 in the 1's place totalling 4.</p>
          <p>0x09 is equivalent to binary: <code>1001</code>. That's a 1 in the 8's place, a 0 in the 4's place, a 0 in the 2's place and a 1 in the 1's place totalling 9.</p>

          <p>Putting these together is quite simple as we only need to place them alongside one-another making 0x49 which is equivalent to binary <code>01001001</code>. That's a 0 in the 128's place, a 1 in the 64's place, a 0 in the 32's place, a 0 in the 16's place, a 1 in the 8's place, a 0 in the 4's place, a 0 in the 2's place and a 1 in the 1's place.</p>

          <p>To swirl this thought around in your brain in a more interactive way, use this input field and output the value in whatever base you choose:</p>

          <BaseConverter baseType="base16" />

          <p>When we summarize these values into their respective bases it appears as: Hex(0x49), Decimal(73), ASCII(I). If we were to step through each pairing of Hex values we would be able to convert them all to whichever base suits us. Interestingly you may have picked up on the fact I haven't really talked about it's base64 representation...there's a gotcha. As an exercise to ease us into dealing with this gotcha we'll use binary as an intermediary helping us arrive at the final form of base64.  Later we'll walk through a concept letting us jump directly from hex to base64 in its final incarnation of our converter in a most efficient way.</p>

          <p>It's a subtle reminder that what is easy for the computer to do in an efficent manner can sometimes be unobvious to human eyes without rolling the data around and looking at it from various angles. I'm very thankful for these challenges providing us purpose driven exploration and curious folks like yourself to do it with!</p>

        </Collapsible>
      </div>
    );
  }
}

export default S1C1Note2;
