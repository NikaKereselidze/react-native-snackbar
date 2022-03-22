import { StyleSheet, View, SafeAreaView, Button } from "react-native";
import Snackbar from "./components/Snackbar";
import { SnackbarStatus } from "./K";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Button title="Show" onPress={() => SnackbarStatus.snackbar.show()} />
      </View>

      <Snackbar ref={(ref) => (SnackbarStatus.snackbar = ref)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
});
