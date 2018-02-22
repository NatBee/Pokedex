import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { setPokeTypes } from '../../actions/index';
import { getTypes } from '../../helper';
import Card from '../Card/Card';

class FakeContainer extends Component {

   componentDidMount = async () => {
    const pokeTypes = await getTypes();
    await this.props.setPokeTypes(pokeTypes);
  }

  render() {

    if(this.props.pokeTypes.length > 0) {
      return (
        <div>
          <Card />
        </div>
      );
    }

    return (
      <img src="https://thumbs.gfycat.com/DeliciousAllCattle-max-1mb.gif" />
    )
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (state) => ({ 
  pokeTypes: state.pokeTypes
});

const mapDispatchToProps = dispatch => ({ 
  setPokeTypes: (pokeTypes) => dispatch(setPokeTypes(pokeTypes))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
