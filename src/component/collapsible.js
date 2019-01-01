import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Collapsible extends Component {
  constructor(props){
    super(props);

    this.state = {
      isExpanded: false
    }
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render(){
    const {linkId, title, children} = this.props;

    return (
      <div className="panel" onClick={(e)=>this.handleToggle(e)}>
        <div className="panel-heading">
          <h3 id={linkId}>{title}</h3>
        </div>
        <div className="panel-collapse">
          <div className="panel-body">
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
