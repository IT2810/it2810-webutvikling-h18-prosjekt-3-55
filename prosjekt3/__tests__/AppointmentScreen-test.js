import 'react-native';
import React from 'react';
import AppointmentScreen from '../screens/AppointmentScreen';

import renderer from 'react-test-renderer';

test('snapshot settingsscreen', () => {
    const tree = renderer.create(<AppointmentScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});