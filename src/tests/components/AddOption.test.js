import React from 'react';
import { shallow } from 'enzyme';
import AddOption from '../../components/AddOption';

test('should render Component correctly', () => {
  const wrapper = shallow(<AddOption error={undefined} optionCount={1}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render Component correctly', () => {
  const wrapper = shallow(<AddOption error={'testabcde'} optionCount={0}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should set inputValue on input', () => {
  const value = 1;
  const wrapper = shallow(<AddOption error={undefined} optionCount={value}/>);
  expect(wrapper.state('optionCount')).toBe(value);
});

test('should set inputValue on input', () => {
  const value = 'abc123';
  const wrapper = shallow(<AddOption error={undefined} optionCount={1}/>);
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('inputValue')).toBe(value);
});

test('should clear state inputValue on optionCount change', () => {
  const value = 'abc123';
  const wrapper = shallow(<AddOption error={undefined} optionCount={0}/>);
  wrapper.find('input').simulate('change', { target: { value }});
  wrapper.setProps({ optionCount: 1});
  expect(wrapper.state('inputValue')).toBe('');
});

test('should call handleAddOption with inputValue on submit', () => {
  const value = 'abc123';
  const addOption = jest.fn();
  const wrapper = shallow (
    <AddOption 
      error={undefined} 
      optionCount={0}
      addOption={addOption}
    />
  );
  wrapper.find('input').simulate('change', { target: { value }});
  wrapper.find('form').simulate("submit", { preventDefault: () => {} });
  expect(addOption).toHaveBeenLastCalledWith(value);
});

