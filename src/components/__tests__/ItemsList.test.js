import React, {useContext} from 'react';
import {shallow, mount, render} from 'enzyme';
import * as AppContext from "hooks/AppContext";

import ItemsList from '../ItemsList';
import Item from '../Item';

describe('ItemsList', () => {
  let mockContext;
  beforeEach(() => {
    mockContext = {
      state: {
        items: [
          {id: 1, title: 'Dog', column: 0},
          {id: 2, title: 'Cat', column: 0},
          {id: 3, title: 'Orca', column: 1},
          {id: 4, title: 'Narwhal', column: 1},
          {id: 5, title: 'Beluga', column: 1}
        ],
        logs: [],
        searchTerm: ''
      }
    }
  })

  it('should render items in proper column', () => { 
    // Provide context for test
    jest
      .spyOn(AppContext, 'useAppContext')
      .mockImplementation(() => mockContext)
    
    const wrapper = mount(<ItemsList />);
    const firstCol = wrapper.find('#column-0').find('ul').find('li')
    const secondCol = wrapper.find('#column-1').find('ul').find('li')
    
    expect(firstCol.length).toEqual(2)
    expect(secondCol.length).toEqual(3)
  });

  it('should filter items when searchTerm is present', () => {
    // Mock search term
    mockContext.state.searchTerm = 'r';
    // Provide context for test
    jest
      .spyOn(AppContext, 'useAppContext')
      .mockImplementation(() => mockContext)
    
    const wrapper = mount(<ItemsList />);
    const firstCol = wrapper.find('#column-0').find('ul').find('li')
    const secondCol = wrapper.find('#column-1').find('ul').find('li')
    
    expect(firstCol.length).toEqual(0)
    expect(secondCol.length).toEqual(2)
    expect(secondCol.first().text()).toEqual('Orca')
    expect(secondCol.last().text()).toEqual('Narwhal')
  });
})