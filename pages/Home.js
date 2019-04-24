import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home",
    headerBackTitle: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigate("Profile", { name: "Jane", title: "Jane" })}
        >
          <Text>Go to my profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("List")}>
          <Text>Go to my to do list</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
