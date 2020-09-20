import React from 'react';
import { shallow } from 'enzyme';
import Speed from './index';

describe('Speed Component', () => { 
  test('render', () => {
    const wrapper = shallow(<Speed />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Speed work correctly', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<Speed />);
    wrapper.setProps({
      onChange: onChangeMock,
      active: 1000
    });

    expect(wrapper.find('button').first().text()).toBe('1X');

    wrapper.find('button').first().simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock).toHaveBeenCalledWith(1000);

    wrapper.find('button').last().simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(2);
    expect(onChangeMock).toHaveBeenCalledWith(500);
  });
});
