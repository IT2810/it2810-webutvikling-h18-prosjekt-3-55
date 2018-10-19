import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

const check = 0;
const task = '';
const taskCounter = 0;

export default class TodoItem extends React.Component {
  render() {
    return (
      <Text
        task={this.props.task}
        checked={this.props.checked}
        id={this.props.id}
      />
    );
  }
}
