import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="search-outline" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="add-circle-outline" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="heart-outline" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
        <Ionicons name="person-circle-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: "rgb(0,0,59)",
    borderTopWidth: 1,
    borderTopColor: "#222",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});