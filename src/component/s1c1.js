import React, { Component } from 'react'
import S1C1Challenge from './s1c1-challenge'
import S1C1Solution from './s1c1-solution'
import S1C1Explanation from './s1c1-explanation'
import './s1c1.css'

class S1C1 extends Component {
  render(){

    return (
      <div className="challenges">
        <h1>Convert <code>hex</code> to <code>base64</code></h1>
        <S1C1Challenge />
        <S1C1Solution />
        <S1C1Explanation />
      </div>
    );
  }
}

export default S1C1;
