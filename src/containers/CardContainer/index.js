import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { setPokeTypes } from '../../actions/index';
import { getTypes } from '../../helper';
import Card from '../Card/Card';

class CardContainer extends Component {

  componentDidMount = async () => {
    const pokeTypes = await getTypes();
    await this.props.setPokeTypes(pokeTypes);
  }

  getPokemon = async (value) => {
    console.log(value)
  }

  renderCards = () => {
    const pokemon = this.props.pokeTypes;
    console.log(pokemon)
    return pokemon.map(poke => {
      return (
        <Card 
          id={poke.id}
          name={poke.name}
          pokemon={poke.pokemon}
          getPokemon={this.getPokemon}
        />
      )
    })
  }

  render() {

    if(this.props.pokeTypes.length > 0) {
      return (
        <div>
          {this.renderCards()}
        </div>
      );
    }

    return (
      <img src="https://thumbs.gfycat.com/DeliciousAllCattle-max-1mb.gif" />
    )
  }
}

CardContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (store) => ({ 
  pokeTypes: store.pokeTypes
});

const mapDispatchToProps = dispatch => ({ 
  setPokeTypes: (pokeTypes) => dispatch(setPokeTypes(pokeTypes))
});
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
