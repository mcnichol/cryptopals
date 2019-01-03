import React, { Component } from 'react';
import Collapsible from './collapsible';

class S1C1Note2 extends Component {
  render(){
    return (
      <div>
        <Collapsible linkId="note2" title="2. Hex Encoded ASCII" >
          <p>Although we will look at how Hex encodings are translated to ASCII, it won't be the final state in what we're looking to accomplish. It will however provide some valuable practice (if not already proficient) in changing encodings through various bases and set us up for a little exercise and understanding.</p>

          <p>To add to this there is a staple article enthusiastically named: <a href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/" target="_blank" rel="noopener noreferrer">The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets</a>.  It's a great article from the great Joel Spolsky. You can see from the opinionated title that it pulls no punches while providing good history on Unicode. This is a step ahead of where we're going right now so bookmark it for some future required reading.</p>

          <p>ASCII is a character encoding standard for how data is passed around. It is 7bits in length meaning it can hold 128 characters whereas human readable form that has a representation for eLet's break down the hex string into smaller components we can make sense of while building upon where the previous section left off.  Remember we had a table displaying various bases (2, 10, 16, 64) where we could easily see the relationship between each of the bases values.</p> 
          
          <p>Taking the first two hex values we must convert we have: <code>49</code></p>

          <p>You will also notice in the entire hex string you will never see a value outside of the characters 0-9 or a-f. Referencing the table again, these are all the values necessary to represent each character starting at '0' and ending at 'f' when dealing with hexadecimal.</p>

          <p>When representing any hexadecimal value in binary we need four bits for every possible value from 0 - 15.  We can calculate the minimum bits necessary by expanding in powers of 2. 2^4 = 16 meaning we have 16 unique configurations when using 4 bits (binary digits). We now have a representation for each value 0-15. As a paper and pencil exercise let's write these values out.</p>

          <p>0x04 is equivalent to binary: <code>0100</code>. That's a 0 in the 8's place, a 1 in the 4's place, a 0 in the 2's place and a 0 in the 1's place totalling 4.</p>
          <p>0x09 is equivalent to binary: <code>1001</code>. That's a 1 in the 8's place, a 0 in the 4's place, a 0 in the 2's place and a 1 in the 1's place totalling 9.</p>

          <p>Putting these together is quite simple as we only need to place them alongside one-another making 0x49 which is equivalent to binary <code>01001001</code>. That's a 0 in the 128's place, a 1 in the 64's place, a 0 in the 32's place, a 0 in the 16's place, a 1 in the 8's place, a 0 in the 4's place, a 0 in the 2's place and a 1 in the 1's place.</p>

          <p>When we sum these values up in their binary form it equals Decimal: 73 and ASCII: 'I'. If we were to step through each pairing of Hex values we would be able to convert them to ASCII, Decimal, or binary. As an exercise we'll use binary as an intermediary to get us to the final form that is base64, but I'll introduce a concept alloing us to jump directly from Hex to base64 representing the final incarnation of our converter.</p>

        </Collapsible>
      </div>
    );
  }
}

export default S1C1Note2;
