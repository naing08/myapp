import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

class hello extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 1, flexDirection:"column", backgroundColor: "powderblue" }}>
          <TextInput
            style={styles.name}
            placeholder="type your name"
            onChangeText={value => {
              this.setState({ name: value });
            }}
          />
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.name.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    textAlign: "left",
    fontSize: 14
  }
});

export default hello;
