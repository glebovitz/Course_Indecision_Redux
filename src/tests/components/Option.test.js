import React from 'react';
import { shallow } from 'enzyme';
import Option from '../../components/Option';

test('should render an Option Component correctly', () => {
  const wrapper = shallow(<Option />);
  expect(wrapper).toMatchSnapshot();
});

test('should render an Option Component with properties correctly', () => {
  const wrapper = shallow(<Option count={5} optionText={'Test Text'}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call deleteOption on remove button click', () => {
  const value = 'abcdef12345';
  const deleteOption = jest.fn();
  const wrapper = shallow(<Option deleteOption={deleteOption} optionText={value}/>);
  wrapper.find('button').simulate("click");
  expect(deleteOption).toHaveBeenLastCalledWith(value);
});
