/* eslint-disable */
import typeReducer from './typeReducer';
import * as actions from '../actions';

describe('all reducers', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(typeReducer(undefined, {})).toEqual(expected);
  })

  it('should return the state with pokeTypes', () => {
    const pokeTypes = [
      {
        "id": "1",
        "name": "normal",
        "pokemon": ["16", "17", "18", "19", "20"]
      }
    ];
    expect(typeReducer(undefined, actions.setPokeTypes(pokeTypes))).toEqual(pokeTypes); 
  })
})