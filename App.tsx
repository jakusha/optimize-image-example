import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 60 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8
  },
});
