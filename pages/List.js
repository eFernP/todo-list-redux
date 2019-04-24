import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import VisibleTodoList from "../containers/VisibleTodoList";
import Header from "../components/Header";

export default class ListScreen extends Component {
  static navigationOptions = {
    title: "To do list"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header />
        <VisibleTodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
