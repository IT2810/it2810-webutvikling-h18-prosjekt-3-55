import 'react-native';
import React from 'react';
import CalendarScreen from '../screens/CalendarScreen';

import renderer from 'react-test-renderer';

test('snapshot linksscreen', () => {
    const tree = renderer.create(<CalendarScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});