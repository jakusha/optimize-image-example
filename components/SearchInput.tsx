import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="search something..."
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

export default SearchInput;


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        gap: 8,
        borderWidth: 1,
        borderRadius: 8,
        padding: 12
    },
})