import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AddTodo from "../containers/AddTodo";
import Filters from "./Filters";

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Filters />
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    width: "100%"
  }
});
