import Ionicons from "@expo/vector-icons/Ionicons";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Header() {

  return (

    <View style={styles.container}>

      <Text style={styles.logo}>
        Instagram
      </Text>

      <View style={styles.search}>

        <Ionicons
          name="search-outline"
          size={18}
          color="#bbb"
        />

        <TextInput
          placeholder="Buscar"
          placeholderTextColor="#bbb"
          style={styles.input}
        />

      </View>

      <View style={styles.icons}>

        <TouchableOpacity>

          <Ionicons
            name="camera-outline"
            size={24}
            color="white"
          />

        </TouchableOpacity>

        <TouchableOpacity>

          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="white"
          />

        </TouchableOpacity>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 15,

    backgroundColor: "rgb(0,0,59)",

    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },

  logo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },

  search: {

    flex: 1,

    marginHorizontal: 15,

    backgroundColor: "#1c1c4b",

    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,

    height: 40,
  },

  input: {
    flex: 1,
    color: "white",
    marginLeft: 8,
  },

  icons: {
    flexDirection: "row",
    gap: 15,
  },

});