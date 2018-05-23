import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render an Header Component correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('should render an Header Component correctly', () => {
  const wrapper = shallow(<Header title="Test Title" subtitle="Test Subtitle"/>);
  expect(wrapper).toMatchSnapshot();
});
