import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {store} from "../components/Storage";

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };

  render() {
    return (
        <Calendar
            onDayPress={(day)=>{store("dates",day.dateString)}}
        />
    );
  }
}
const styles = StyleSheet.create({
    tran: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    }
});
