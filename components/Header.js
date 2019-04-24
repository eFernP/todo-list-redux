import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddTodo from '../containers/AddTodo';
import Filters from './Filters';
import AddTodoInputState from './AddTodoInputState';


type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Filters/>
        <AddTodo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 50,
      width: '100%'
    }
});