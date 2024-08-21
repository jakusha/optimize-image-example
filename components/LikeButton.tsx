import { View, Alert, Button, StyleSheet } from "react-native";

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
    <View style={styles.buttonContainer}>
      <Button title="like button" onPress={buttonHandler} />
    </View>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    padding: 4,
    width: 150,
    borderRadius: 8,
    backgroundColor: "#171723",
    color: "#ffffff",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
