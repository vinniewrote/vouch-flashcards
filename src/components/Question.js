import React, { Component } from "react";

class Question extends Component {
  
  render() {
    const { cardDetails } = this.props;
    return (<h3>{cardDetails.cardQuestion}</h3>);
  }
}

export default Question;