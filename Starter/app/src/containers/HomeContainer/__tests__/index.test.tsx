import React from 'react';
import { HomeContainer } from '../index';
import { render, screen } from '@testing-library/react-native';
// import { screen } from '@testing-library/react-native';
// import { customRender } from '@/utils/test-utils';
import renderer from 'react-test-renderer';

describe('Testing react navigation', () => {
  test('clicking on the button takes you to the notifications screen', () => {
    const component = <HomeContainer />;

    render(component);
    const oldScreen = screen.queryByText('hi there');

    expect(oldScreen).toBeOnTheScreen();
  });
});

test('renders correctly', () => {
  const tree = renderer.create(<HomeContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
