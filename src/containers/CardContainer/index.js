import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { setPokeTypes } from '../../actions/index';
import { getTypes, getPokemonData } from '../../helper';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }

  componentDidMount = async () => {
    const pokeTypes = await getTypes();
    await this.props.setPokeTypes(pokeTypes);
  }

  getPokemon = async (value) => {
    const type = this.props.pokeTypes.filter( poke => poke.id === value )
    console.log(type)
    console.log(type[0].pokemon)
    const pokemon = await type[0].pokemon.map( async poke => {
      await Promise.all(getPokemonData(poke)))
    }
    // Promise.all(pokemon)
    console.log(pokemon)
    this.setState({pokemon})
    console.log(this.state.pokemon)
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
