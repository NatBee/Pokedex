import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { setPokeTypes } from '../../actions/index';
import { getTypes } from '../../helper';

class FakeContainer extends Component {

   getPokeTypes = async () => {
    const pokeTypes = await getTypes();
    await this.props.setPokeTypes(pokeTypes);
  }

  render() {

    if(this.props.pokeTypes.length > 0) {
      return (
        <div>
          <button onClick={()=> {
            this.getPokeTypes()
          }}> Get Types </button>
        </div>
      );
    }

    return (
      <img src="https://media.giphy.com/media/yhfTY8JL1wIAE/giphy.gif" />
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
