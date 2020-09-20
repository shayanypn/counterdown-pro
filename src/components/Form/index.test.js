import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

describe('Form Component', () => { 
  test('render', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Form work correctly', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<Form />);
    wrapper.setProps({
      onChange: onChangeMock,
    });

    wrapper
      .find('input')
      .simulate('change', { target: { value: '01:00' } });
    expect(wrapper.find('input').props().value).toBe('01:00');

    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').exists()).toBe(false);

    wrapper
      .find('input')
      .simulate('change', { target: { value: '01:99' } });

    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('time should be in MM:SS format.');

    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
