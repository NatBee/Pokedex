import React, { Component } from 'react';

class PokeCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <article>
        <img src={this.props.sprite.back_default}/>
        <h3>{this.props.name}</h3>
        <h3>{this.props.type}</h3>
        <h3>{this.props.weight}</h3>
      </article>
    )    
  }
}

export default PokeCard;