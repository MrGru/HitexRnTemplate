import React, { Component } from "react";
import { View, Text } from "react-native";

class WelcomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "nothing yet"
    };
  }

  componentDidAppear() {
    console.log("componentDidAppear");
  }

  componentDidDisappear() {
    console.log("componentDidDisAppear");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <View>
        <Text> Nội dung text </Text>
        <Text> {this.state.text} </Text>
      </View>
    );
  }
}

export default WelcomScreen;
