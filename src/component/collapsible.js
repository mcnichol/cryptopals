import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './collapsible.css';

class Collapsible extends Component {
  constructor(props){
    super(props);

    this.state = {
      isExpanded: true
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
        <div className="panel" >
          <div className="panel-heading" onClick={(e)=>this.handleToggle(e)}>
            <h4 id={linkId}>{title}</h4>
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
