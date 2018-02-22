import * as actions from './index';

describe('all actions', () => {
  it('should return a type of SET_TYPE, with poketypes', () => {
    const pokeTypes = [
      {
        "id": "1",
        "name": "normal",
        "pokemon": ["16", "17", "18", "19", "20"]
      }
    ];
    const expected = {
      type: 'SET_TYPE',
      pokeTypes
    }
    expect(actions.setPokeTypes(pokeTypes)).toEqual(expected);
  })
})