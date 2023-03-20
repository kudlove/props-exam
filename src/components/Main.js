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

  onOpenModal = (e, id) => {
    e.preventDefault();
    this.modalOpen(id);
  };


  render(){


    return <h3>{[..."test"]}</h3>
  }
}

export default Main;