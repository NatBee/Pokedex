import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props)
  }

  handleclick = () => {
    this.props.getPokemon(this.props.id)
  }
  render() {
    return (
      <article>
        <h3 onClick={this.handleclick}>{this.props.name}</h3>
      </article>
    )    
  }
}

export default Card;
