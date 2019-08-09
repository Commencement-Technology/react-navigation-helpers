import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavigationService from "react-navigation-helpers";
import styles from "./styles/styles";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => NavigationService.pop()}
        >
          <Text style={styles.textStyle}>Pop</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
