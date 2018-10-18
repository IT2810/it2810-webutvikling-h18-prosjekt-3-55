import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'TODOs',
  };

  render() {
    return (
        <Text style={styles.tran}>
            hallo
            yoyo
        </Text>
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
