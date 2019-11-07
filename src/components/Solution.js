import React, { Component } from "react";

export default class Solution extends Component {
  render() {
    const { cardDetails } = this.props;
    return(<h3>{cardDetails.cardSolution}</h3>);
  }
}
