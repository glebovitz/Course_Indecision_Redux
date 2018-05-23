import React from 'react';
import { shallow } from 'enzyme';
import OptionModal from '../../components/OptionModal';

test('should render OptionModal correctly', () => {
  const wrapper = shallow (
    <OptionModal
      selectedOption={undefined}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should call clearSelectedOption correctly', () => {
  const clearSelectedOption = jest.fn();
  const wrapper = shallow (
    <OptionModal
      selectedOption={undefined}
      clearSelectedOption={clearSelectedOption}
    />
  );
  wrapper.find("button").simulate("click");
  expect(clearSelectedOption).toHaveBeenCalled();
});

test('should set lastSelectedOption correctly', () => {
  const value = 'testabcde12345';

  const wrapper = shallow (
    <OptionModal
      selectedOption={value}
    />
  );
  expect(wrapper.state('lastSelectedOption')).toBe(value);
});

test('should set isOpen to false correctly', () => {
  const wrapper = shallow (
    <OptionModal
      selectedOption={undefined}
    />
  );
  expect(wrapper.find("Modal").props().isOpen).toBeFalsy();
});

test('should set isOpen to true correctly', () => {
  const wrapper = shallow (
    <OptionModal
      selectedOption={"test"}
    />
  );
  expect(wrapper.find("Modal").props().isOpen).toBe(true);
});

test('should call clearSelectedOption from onRequestClose correctly', () => {
  const clearSelectedOption = jest.fn();
  const wrapper = shallow (
    <OptionModal
      selectedOption={undefined}
      clearSelectedOption={clearSelectedOption}
    />
  );
  wrapper.find("Modal").props().onRequestClose();
  expect(clearSelectedOption).toHaveBeenCalled();
});


