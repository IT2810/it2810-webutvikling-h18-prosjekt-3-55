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
  TouchableOpacity,
  Platform } from 'react-native';
import ScrollViewExample from '../components/TodoContainer';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {store, retrieve} from "../components/Storage";


export default class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };

  static navigationOptions = {
    title: 'TODOs',
  };

      constructor(props) {
          super(props);
          this.state = {
              tasks: [],
              text: 'tester',
              todos: [
                  {'task': 'Ta medisinene dine', 'id': 1, 'checked': 0},
                  {'task': 'Puss tennene', 'id': 2, 'checked': 0},
                  {'task': 'Gi en god klem', 'id': 3, 'checked': 0},
                  {'task': 'Ha en nydelig dag', 'id': 4, 'checked': 0},],


          }


      }

  render() {


    return (
      <View >
      <Calendar onDayPress={(day) => {store(day.dateString, this.state.todos)} }
      />

          <View>
              <ScrollView>
                  {this.state.todos.map((item, index) => (
                      <View key = {item.id} style = {styles.item} >
                          <Text>{item.task}</Text>
                      </View>
                  ))}
              </ScrollView>
              <Text>  </Text>
          </View>
</View>


    );
  }
}
const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 15,
        margin: 2,
        borderColor: '#23B5D3',
        borderWidth: 1,
        backgroundColor: '#F7F7FF'
    }
})


