import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import { addTodo, clearInput } from '../actions';

type Props = {};
export default class AddTodoInputState extends Component<Props> {

  state={
    input : ''
  }

  updateInput = (text)  => {
    this.setState({
        input : text
    });
  }

  render() {
    return (
      <View>
         <TextInput 
        style={styles.text}
        value={this.state.input}
        onChangeText={(text) => this.updateInput(text)} 
        onSubmitEditing={()=>{
            this.props.onSubmit(this.state.input);
            this.setState({
                input: ''
            })
        }} 
        placeholder="Add a todo (component with state)"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text:{
      fontSize: 18,
      flex: 1,
      justifyContent: 'center',
      margin: '5%',
  
    }
  });