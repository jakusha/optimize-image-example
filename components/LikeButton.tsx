import {  Alert, Text, StyleSheet, Pressable } from "react-native";

const LikeButton = () => {
  const buttonHandler = () =>
    Alert.alert("Hurray!", "Like button clicked!", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK" },
    ]);

  return (
    <Pressable style={styles.buttonContainer} onPress={buttonHandler}> 
      <Text style={styles.buttonText}>click me</Text>
    </Pressable>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    padding: 8,
    paddingVertical: 12,
    width: 150,
    borderRadius: 8,
    backgroundColor: "#171723",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
