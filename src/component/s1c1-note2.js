import React, { Component } from 'react';
import Collapsible from './collapsible';
import BaseConverter from './base-converter';

class S1C1Note2 extends Component {
  render(){
    return (
      <div>
        <Collapsible linkId="note2" title="2. Hex Encoded ASCII" >
          <p>Although we will look at how Hex encodings are translated to ASCII, it won't be the final state in what we're looking to accomplish. It will however provide some valuable practice (if not already proficient) in changing encodings and cycling through various bases to set us up for a little exercise and understanding.</p>

          <p>To add to this there is a staple article enthusiastically named: <a href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/" target="_blank" rel="noopener noreferrer">The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets</a>.  It's a great article from an even greater Joel Spolsky. You can see from the opinionated title that it pulls no punches while providing good history on Unicode. It's a step ahead of where we're going right now so bookmark for later.</p>

          <p>So why bother with HEX -> ASCII conversion when we really only care about getting to base64?</p>

          <p>ASCII is another character encoding standard used when passing data around that can be viewed in a human readable form. Instead of bouncing around in different encodings exercising our logic and math, we can see how this carries information in a form we can care about. In this way the WHY can be immediately apparent letting us move onto the HOW which has a myriad of options and clever techniques for us to stumble around with (one of which you will see in just a moment!)</p>

          <p>ASCII is 7 bits (binary digits) in length meaning it can represent 128 (2^7) characters. A single byte having 8 bits means ASCII affords us the opportunity for a parity bit but we won't get that detailed in this explanation. What it ultimately provides is the textual representation of this hashed message (if there is one) that is human readable and shows how we can leverage encodings as carriers of information.  We can see this by breaking down the hex string into smaller components in relation to how it is evaluated in ASCII. Remember the table displaying the various bases (2, 10, 16, 64) in the previous section. These all have a relationship to ASCII and can be easily seen in this <a href="http://www.asciitable.com/" target="_blank" rel="noreferrer noopener">ASCII Table</a>.</p>

          <p>Taking the first two hex values from above which must be converted we have: <code>0x49</code></p>

          <p>When representing any hexadecimal value in binary we need four bits to represent every possible value from 0 - 15, or in hex, 0-f.  To calculate the bits necessary we work in powers of 2. If each binary placeholder can hold 2 values (0 or 1) then when using two binary placeholders, I can have 4 values (2*2). We keep doing this until every representation we care about is covered. Therefore:</p>

          <code>2^4 = 16</code>

          <p>We now have 16 unique configurations which require the use of 4 bits. We can now represent the <i>decimal value</i> 0-15 or more appropriately <i>hex value</i> 0-f. As a paper and pencil exercise let's write these values out.</p>

          <h4>0x04 is equivalent to binary: <code>0100</code></h4>
          <table className="binary-view">
            <tr><td>8</td><td>4</td><td>2</td><td>1</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
          </table>

          <code>(0*8) + (1*4) + (0*2) + (0*1) = 4</code>

          <h4>0x09 is equivalent to binary: <code>1001</code></h4>
          <table className="binary-view">
            <tr><td>8</td><td>4</td><td>2</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
          </table>

          <code>(1*8) + (0*4) + (0*2) + (1*1) = 9</code>

          <p>Putting these together we conveniently connect them alongside one-another.</p>

          <h4>0x49 is equivalent to binary <code>01001001</code></h4>
          <table className="binary-view">
            <tr><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
          </table>

          <code>(0*128) + (1*64) + (0*32) + (0*16) + (1*8) + (0*4) + (0*2) + (1*1) = 73</code>

          <p>You can now see how we are taking two 4 bit hex values to make a single 8 bit (byte) value which can be expressed as decimal(73) and what our goal for this section was, as ASCII(I). If we were to step through each pairing of Hex values we would be able to convert them all to whichever base suits us.</p>

          <p>That's a lot to take in so play around with these ideas a moment to help them solidify. There is an interactive converter below you can use to test some of your own values or even see what the challenges hash evalutes to. 0x49 0x27 0x6d translate to <code>I'm</code> so that's a hint that something is hiding inside there.</p>

          <BaseConverter baseFrom="base16" baseTo="base128" defaultInput="49" />

          <p>Interestingly you may have picked up on the fact I haven't really talked about it's base64 representation...there's a gotcha. As an exercise to ease us into dealing with this gotcha we'll use binary as an intermediary helping us arrive at the final form of base64.  Later we'll walk through a concept letting us jump directly from hex to base64 in its final incarnation of our converter in a most efficient way.</p>

          <p>It's a subtle reminder that what is easy for the computer to do in an efficent manner can sometimes be unobvious to human eyes without rolling the data around and looking at it from various angles. I'm very thankful for these challenges providing us purpose driven exploration and curious folks like yourself to do it with!</p>
        </Collapsible>
      </div>
    );
  }
}

export default S1C1Note2;
