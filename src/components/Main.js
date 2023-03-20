import React, { Component } from 'react';

class Main extends Component {

  modalOpen = id => {
    this.setState({
      [id]: true,
    });
  };

  modalClose = id => {
    this.setState({
      [id]: false,
    });
  };



  render(){


    return <h3>{[..."test"]}</h3>
  }
}

export default Main;