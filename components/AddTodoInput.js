import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, clearInput, updateInput } from '../actions';


const AddTodoInput = ({ textInputAdd, dispatch }) => {

  return (
    <View sytle={styles.container}>
        <TextInput 
        style={styles.text}
        value={textInputAdd}
        onChangeText={(text) => dispatch(updateInput(text))} 
        onSubmitEditing={()=>{
            dispatch(addTodo(textInputAdd));
            dispatch(clearInput());
        }} 
        placeholder="Add a todo"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    flex: 1,
    justifyContent: 'center',
    margin: '5%',

  }
});

export default AddTodoInput;