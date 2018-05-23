import React from 'react';
import { shallow } from 'enzyme';
import { Options } from '../../components/Options';
import testOptions from '../fixtures/options';

test('should render an Options Component correctly', () => {
  const wrapper = shallow(<Options options={testOptions}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call deleteOptions', () => {
  const deleteOptions = jest.fn();
  const wrapper = shallow(<Options deleteOptions={deleteOptions} options={testOptions}/>);
  wrapper.find('button').simulate('click');
  expect(deleteOptions).toHaveBeenCalled();
});
