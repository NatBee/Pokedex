import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { setPokeTypes } from '../../actions';
import { getTypes } from '../../helper';

class FakeContainer extends Component {

   getPokeTypes = () => {
    const pokeTypes = getTypes();
    //setPokeTypes(pokeTypes)
  }

  render() {
    return (
      <div>
        <button onClick={()=> {
          this.getPokeTypes()
        }}> Get Types </button>
      </div>
    );
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ fakeAction:
  () => dispatch(fakeAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
