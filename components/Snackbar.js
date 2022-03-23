import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useImperativeHandle } from "react";

const Snackbar = React.forwardRef((_, ref) => {
  const [show, setShow] = useState(false);

  const showBar = () => {
    setShow(true);
  };
  const hide = () => {
    setShow(false);
  };

  useImperativeHandle(ref, () => ({ showBar, hide }));

  if (show) {
    return (
      <View>
        <View style={styles.view}>
          <Text style={styles.text}>No internet connection!</Text>
          <TouchableOpacity onPress={hide}>
            <Text style={styles.textButton}>RETRY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else return null;
});

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#383838",
    padding: 18,
  },
  text: {
    color: "yellow",
  },
  textButton: {
    color: "red",
  },
});

export default Snackbar;
