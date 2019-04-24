import React, { Component } from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Profile"),
      headerLeft: (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Go to my list</Text>
        </TouchableOpacity>
      )
    };
  };

  toggleName() {
    if (this.props.navigation.state.params.name === "Ester") {
      this.props.navigation.setParams({ name: "Jane", title: "Jane" });
    } else {
      this.props.navigation.setParams({ name: "Ester", title: "Ester" });
    }
  }

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View>
        <Text>Hello {params.name}</Text>
        <Button
          title={"My name is " + (params.name === "Ester" ? "Jane" : "Ester")}
          onPress={() => this.toggleName()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10
  }
});
