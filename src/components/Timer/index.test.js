import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from './index';

describe('Timer Component', () => { 
  test('render', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Timer work correctly for 12:34', () => {
    const mockData = {
      time: 743,
    };
    const wrapper = shallow(<Timer {...mockData} />);

    expect(wrapper.find('span').get(0).props.children).toBe(12);
    expect(wrapper.find('span').get(2).props.children).toBe(23);
  });

  test('Timer work correctly for invalid number ab:cd', () => {
    const mockData = {
      time: -12,
    };
    const wrapper = shallow(<Timer {...mockData} />);

    expect(wrapper.find('span').get(0).props.children).toBe('00');
    expect(wrapper.find('span').get(2).props.children).toBe('00');
  });
});
