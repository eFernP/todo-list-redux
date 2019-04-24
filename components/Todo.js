import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

const Todo = ({ onPress, completed, text }) => (
  <Text
    onPress={onPress}
    style={{
      fontSize: 16,
      marginHorizontal: 20,
      marginBottom: 10,
      textDecorationLine: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </Text>
)


Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;