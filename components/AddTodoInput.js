import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, clearInput, updateInput } from '../actions';


const AddTodoInput = ({ textInputAdd, dispatch }) => {

  return (
    <View>
        <TextInput 
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

export default AddTodoInput