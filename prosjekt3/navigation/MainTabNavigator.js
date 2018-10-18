import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import CalendarScreen from '../screens/CalendarScreen';
import AppointmentScreen from '../screens/AppointmentScreen';

const TodoStack = createStackNavigator({
  TODO: TodoScreen,
});

TodoStack.navigationOptions = {
  tabBarLabel: 'TODO',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        //Platform.OS === 'ios'
          //? `ios-calendar {focused ? '' : '-outline'}`
          //: 'md-information-circle'

           `md-checkbox${focused ? '' : '-outline'}`
      }
    />
  ),
};
// if something then this else that
// statement ? this : that



const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
      `md-calendar`
    }
    />
  ),
};



export default createBottomTabNavigator({
  TodoStack,
  CalendarStack,

});
