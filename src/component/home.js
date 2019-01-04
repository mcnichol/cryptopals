import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
  render(){
    return (
      <div className="challenges">

        <h2>Challenge Set 1: The Basics</h2>
        <ol>
          <li><Link to="/s1c1">Convert Hex to Base64</Link></li>
          <li><Link to="/s1c2">Fixed XOR</Link></li>
          <li><Link to="/s1c3">Single-byte XOR cipher</Link></li>
          <li><Link to="/s1c4">Detect single-character XOR</Link></li>
          <li><Link to="/s1c5">Implement repeating-key XOR</Link></li>
          <li><Link to="/s1c6">Break repeating-key XOR</Link></li>
          <li><Link to="/s1c7">AES in ECB mode</Link></li>
          <li><Link to="/s1c8">Detect AES in ECB mode</Link></li>
        </ol>

        <h2>Challenge Set 2: Block crypto</h2>
        <ol>
          <li><Link to="/s2c9">Implement PKCS#7 Padding</Link></li>
          <li><Link to="/s2c10">Implement CBC mode</Link></li>
          <li><Link to="/s2c11">An ECB/CBC detection oracle</Link></li>
          <li><Link to="/s2c12">Byte-at-a-time ECB decryption (Simple)</Link></li>
          <li><Link to="/s2c13">ECB cut-and-paste</Link></li>
          <li><Link to="/s2c14">Byte-at-a-time ECB decryption (Harder)</Link></li>
          <li><Link to="/s2c15">PCKS#7 padding validation</Link></li>
          <li><Link to="/s2c16">CBC bitflipping attacks</Link></li>
        </ol>

        <h2>Challenge Set 3: Block & stream crypto</h2>
        <ol>
          <li><Link to="/s3c17">The CBC padding oracle</Link></li>
          <li><Link to="/s3c18">Implement CTR, the stream cipher mode</Link></li>
          <li><Link to="/s3c19">Break fixed-nonce CTR mode using substitutions</Link></li>
          <li><Link to="/s3c20">Break fixed-nonce CTR statistically</Link></li>
          <li><Link to="/s3c21">Implement the MT19937 Mersenne Twister RNG</Link></li>
          <li><Link to="/s3c22">Crack an MT19937 seed</Link></li>
          <li><Link to="/s3c23">Crack an MT19937 RNG from its output</Link></li>
          <li><Link to="/s3c24">Create the MT19937 stream cipher and break it</Link></li>
        </ol>

        <h2>Challenge Set 4: Stream crypto and randomness</h2>
        <ol>
          <li><Link to="/s4c25">Break "random access read/write" AES CTR</Link></li>
          <li><Link to="/s4c26">CTR bitflipping</Link></li>
          <li><Link to="/s4c27">Recover the key from CBC ith IV=Key</Link></li>
          <li><Link to="/s4c28">Implement a SHA-1 keyed MAC</Link></li>
          <li><Link to="/s4c29">Break a SHA-1 keyed MAC length extension</Link></li>
          <li><Link to="/s4c30">Break an MD4 keyed MAC using length extension</Link></li>
          <li><Link to="/s4c31">Implement and break HMAC-SHA1 with an artificial timing leak</Link></li>
          <li><Link to="/s4c32">Break HMAC-SHA1 with a slightly less artificial timing leak</Link></li>
        </ol>

        <h2>Challenge Set 5: Diffie-Hellman and friends</h2>
        <ol>
          <li><Link to="/s5c33">Implement Diffie-Hellman</Link></li>
          <li><Link to="/s5c34">Implement a MITM key-fixing attack on Diffie-Hellman with parameter injection</Link></li>
          <li><Link to="/s5c35">Implement DH with negotiated groups, and break ith malicious "g" parameters</Link></li>
          <li><Link to="/s5c36">Implement Secure Remote Password (SRP)</Link></li>
          <li><Link to="/s5c37">Break SRP with a zero key</Link></li>
          <li><Link to="/s5c38">Offline dictionary attack on simplified SRP</Link></li>
          <li><Link to="/s5c39">Implement RSA</Link></li>
          <li><Link to="/s5c40">Implement an E=RSA Broadcast attack</Link></li>
        </ol>

        <h2>Challenge Set 6: RSA and DSA</h2>
        <ol>
          <li><Link to="/s6c41">Implement unpadded message recovery oracle</Link></li>
          <li><Link to="/s6c42">Bleichenbacher's e=3 RSA Attack</Link></li>
          <li><Link to="/s6c43">DSA key recovery from nonce</Link></li>
          <li><Link to="/s6c44">DSA nonce recovery from repeated nonce</Link></li>
          <li><Link to="/s6c45">DSA parameter tampering</Link></li>
          <li><Link to="/s6c46">RSA parity oracle</Link></li>
          <li><Link to="/s6c47">Bleichenbacher's PCKS 1.5 Padding Oracle (Simple Case)</Link></li>
          <li><Link to="/s6c48">Bleichenbacher's PCKS 1.5 Padding Oracle (Complete Case)</Link></li>
        </ol>

        <h2>Challenge Set 7: Hashes</h2>
        <ol>
          <li><Link to="/s7c49">CBC-MAC Message Forgery</Link></li>
          <li><Link to="/s7c50">Hashing with CBC-MAC</Link></li>
          <li><Link to="/s7c51">Compression Ratio Side-Channel Attacks</Link></li>
          <li><Link to="/s7c52">Iterated Hash Function Multicollisions</Link></li>
          <li><Link to="/s7c53">Kelsey and Schneier's Expandable Messages</Link></li>
          <li><Link to="/s7c54">Kelsey and Kohno's Nostradamus Attack</Link></li>
          <li><Link to="/s7c55">MD4 Collisions</Link></li>
          <li><Link to="/s7c56">RC4 Single-Byte Biases</Link></li>
        </ol>

        <h2>Challenge Set 8: Abstract Algebra</h2>
        <ol>
          <li><Link to="/s8c57">Diffie-Hellman Revisited: Small Subgroup Confinement</Link></li>
          <li><Link to="/s8c58">Pollard's Method for Catching Kangaroos</Link></li>
          <li><Link to="/s8c59">Elliptic Curve Diffie-Helman and Invalid-Curve Attacks</Link></li>
          <li><Link to="/s8c60">Single-Coordinate Ladders and Insecure Twists</Link></li>
          <li><Link to="/s8c61">Duplicate-Signature Key Selection in ECDSA (and RSA)</Link></li>
          <li><Link to="/s8c62">Key-Recovery Attacks on ECDSA with Biased Nonces</Link></li>
          <li><Link to="/s8c63">Key-Recovery Attacks on GCM with Repeated Nonces</Link></li>
          <li><Link to="/s8c64">Key-Recovery Attacks on GCM with a Truncated MAC</Link></li>
        </ol>
      </div>
    );
  }
}

export default Home;
