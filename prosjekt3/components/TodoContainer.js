import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import TabBarIcon from './TabBarIcon';
import { AsyncStorage } from "react-native"


_storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
}

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}

class ScrollViewExample extends Component {
   state = {

      todos: [
         {'task': 'Ta medisinene dine', 'id': 1, 'checked':0},
         {'task': 'Puss tennene', 'id': 2, 'checked':0},
         {'task': 'Gi en god klem', 'id': 3, 'checked':0},
         {'task': 'Ha en nydelig dag', 'id': 4, 'checked':0},
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {this.state.todos.map((item, index) => (
                     <View key = {item.id} style = {styles.item} >
                        <Text>{item.task}  </Text>
                          <TabBarIcon
                            name={
                                 `md-checkbox${ item.checked ? '' : '-outline'}`
                            }
                          />
                        ),
                     </View>
                  ))
               }
            </ScrollView>
            <Text>  </Text>
         </View>
      )
   }
}
export default ScrollViewExample

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
