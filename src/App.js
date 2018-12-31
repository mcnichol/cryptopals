import React, { Component } from 'react';
import Home from './component/home'
import S1C1 from './component/s1c1'
import S1C2 from './component/s1c2'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div> 
              <Route path="/" exact component={Home} />
              <Route path="/s1c1" component={S1C1} />
              <Route path="/s1c2" component={S1C2} />
            </div>
          </Router>	
      </div>
    );
  }
}

export default App;
