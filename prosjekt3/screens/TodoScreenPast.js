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
import TodoContainer from '../components/TodoContainer';
import TodoList from 'TodoList-ReactNative'


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
      <Text style={styles.tran}>
        <TodoContainer> </TodoContainer>

      <Button
      onPress={() => {
    Alert.alert('You tapped the button!');
  }}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />


        <Text style={styles.tran} onPress={this.onPressTitle}>
          {this.state.text}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.tran}
        </Text>
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
