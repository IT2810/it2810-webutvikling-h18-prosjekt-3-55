import 'react-native';
import React from 'react';
import TodoScreen from '../screens/TodoScreen';

import renderer from 'react-test-renderer';

test('snapshot homescreen', () => {
    const tree = renderer.create(<TodoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});