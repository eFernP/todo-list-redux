import React, { Component } from "react";
import { ListView, StyleSheet, Text, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import Todo from "./Todo";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const TodoList = ({ todos, toggleTodo }) => (
  <View style={styles.container}>
    <Text style={styles.title}>TO DO LIST</Text>
    {todos.length > 0 ? (
      <ListView
        dataSource={ds.cloneWithRows(todos)}
        renderRow={todo => (
          <Todo key={todo.id} {...todo} onPress={() => toggleTodo(todo.id)} />
        )}
      />
    ) : (
      <Text style={{ textAlign: "center", marginTop: 25 }}>List empty</Text>
    )}

    {/* {todos.length > 0 ? 
      <FlatList
        data={todos}
        renderItem={({todo}) => <Text>{todo.text}</Text>}
        /> : 
        <Text>List empty</Text>
    }*/}

    {/* {todos.map(todo => (
      <Todo key={todo.id} {...todo} onPress={() => toggleTodo(todo.id)} />
    ))} */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#ededed',
    height: "60%",
    width: "75%",
    marginTop: "5%"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  }
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
