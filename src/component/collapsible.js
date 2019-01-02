import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './collapsible.css';

class Collapsible extends Component {
  constructor(props){
    super(props);

    this.state = {
      isExpanded: false
    }
  }

  handleToggle(e) {
    if(e.target.target === "_blank") return;

    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render(){
    const {linkId, title, children} = this.props;
    const isExpanded = this.state.isExpanded;

    return (
      <div>
        <div className="panel" onClick={(e)=>this.handleToggle(e)}>
          <div className="panel-heading">
            <h3 id={linkId}>{title}</h3>
          </div>
        </div>

        <div className="panel-collapse">
          <div className={`panel-body ${isExpanded ? 'is-expanded' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  title: PropTypes.string,
}

export default Collapsible;
