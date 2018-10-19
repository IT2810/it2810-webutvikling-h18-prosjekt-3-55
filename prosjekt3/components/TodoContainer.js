import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements'
import TabBarIcon from './TabBarIcon';
const check = 1;

class ScrollViewExample extends Component {
   state = {

      todos: [
         {'task': 'Ben', 'id': 1, 'checked':0},
         {'task': 'Susan', 'id': 2, 'checked':0},
         {'task': 'Robert', 'id': 3, 'checked':0},
         {'task': 'Mary', 'id': 4, 'checked':0},
         {'task': 'Daniel', 'id': 5, 'checked':1},
         {'task': 'Laura', 'id': 6, 'checked':0},
         {'task': 'John', 'id': 7, 'checked':0},
         {'task': 'Debra', 'id': 8, 'checked':0},
         {'task': 'Aron', 'id': 9, 'checked':0},
         {'task': 'Ann', 'id': 10, 'checked':0},
         {'task': 'Steve', 'id': 11, 'checked':0},
         {'task': 'Olivia', 'id': 12, 'checked':1}
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.todos.map((item, index) => (
                     <View key = {item.id} style = {styles.item} >
                     check = {item.checked}
                        <Text>{item.task}                                                                                                       </Text>
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
      padding: 30,
      margin: 2,
      borderColor: '#23B5D3',
      borderWidth: 1,
      backgroundColor: '#F7F7FF'
   }
})
