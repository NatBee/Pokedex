/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer, { mapStateToProps, mapDispatchToProps } from './index';

describe('CardContainer', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer store={mockStore}/>);
    expect(wrapper).toMatchSnapshot()
  })

  it('should map the store correctly', () => {
    const mockStore = {
      pokeTypes: [
        {
          "id": "1",
          "name": "normal",
          "pokemon": ["16", "17", "18", "19", "20"]
        }
      ]
    }
    const mapped = mapStateToProps(mockStore);
    expect(mapped.pokeTypes).toEqual(mockStore.pokeTypes)
  })

  it('should call the dispatch fn when using a fn from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.setPokeTypes();
    expect(mockDispatch).toHaveBeenCalled()
  })


})
