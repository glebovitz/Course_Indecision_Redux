import React from 'react';
import { shallow } from 'enzyme';
import Action from '../../components/Action';

test('should render an Action Component correctly', () => {
  const wrapper = shallow(<Action hasOptions={true}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render disabled Action Component correctly', () => {
  const wrapper = shallow(<Action hasOptions={false}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should handle button click', () => {
  const pickOption = jest.fn();
  const wrapper = shallow(<Action pickOption={pickOption} hasOptions={true} />);
  wrapper.find('button').simulate("click");
  expect(pickOption).toHaveBeenCalled();
});
