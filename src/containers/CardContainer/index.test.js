/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './index';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const mockStore = {
      pokeTypes: [
        {
          "id": "1",
          "name": "normal",
          "pokemon": ["16", "17", "18", "19", "20"]
        }
      ]
    }
    const wrapper = shallow(<CardContainer store={mockStore}/>);
    expect(wrapper).toMatchSnapshot()
  })


})
