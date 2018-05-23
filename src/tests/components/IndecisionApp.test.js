import React from 'react';
import { shallow, mount } from 'enzyme';
import { IndecisionApp } from '../../components/IndecisionApp';
import testOptions from '../fixtures/options';

test('should render Component with values correctly', () => {
  const wrapper = shallow (
    <IndecisionApp
      options={testOptions}
      selectedOption={'testabcdef'}
      error={'test123456'}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Component with defaults correctly', () => {
  const wrapper = shallow (
    <IndecisionApp
      options={[]}
      selectedOption={undefined}
      error={undefined}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should call selectOption from pickOption correctly', () => {
  const selectOption = jest.fn();
  const wrapper = shallow (
    <IndecisionApp
      options={testOptions}
      selectedOptions={undefined}
      selectOption={selectOption}
      error={undefined}
    />
  );
  wrapper.find("Action").props().pickOption();
  expect(selectOption).toHaveBeenCalled();
});

test('should call selectOption from pickOption correctly', () => {
  const addOption = jest.fn();
  const value = "testabcdef";
  const wrapper = shallow (
    <IndecisionApp
      options={testOptions}
      selectedOptions={undefined}
      addOption={addOption}
      error={undefined}
    />
  );
  wrapper.find("AddOption").props().addOption();
  expect(addOption).toHaveBeenCalled();
});

test('should call clearSelectedOption to be called correctly from OptionModal', () => {
  const clearSelectedOption = jest.fn();
  const value = "testabcdef";
  const wrapper = shallow (
    <IndecisionApp
      options={testOptions}
      selectedOptions={undefined}
      clearSelectedOption={clearSelectedOption}
      error={undefined}
    />
  );
  wrapper.find("OptionModal").props().clearSelectedOption();
  expect(clearSelectedOption).toHaveBeenCalled();
});

