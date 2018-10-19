import React from 'react';
import { ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Alert,
  AppRegistry,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform } from 'react-native';
import ScrollViewExample from '../components/TodoContainer';
import { CheckBox } from 'react-native-elements';


export default class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'TODOs',
  };
  state = {
    tasks: [],
    text: 'tester'
  };

  render() {

    return (
      <ScrollViewExample />



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
