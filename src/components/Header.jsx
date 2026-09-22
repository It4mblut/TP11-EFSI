import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg, borderBottomColor: theme.border }]}>
      <Text style={[styles.logo, { color: theme.text }]}>Instagram</Text>

      <View style={[styles.search, { backgroundColor: theme.cardBg }]}>
        <Ionicons name="search-outline" size={18} color={theme.textSecondary} />
        <TextInput
          placeholder="Buscar"
          placeholderTextColor={theme.textSecondary}
          style={[styles.input, { color: theme.text }]}
        />
      </View>

      <View style={styles.icons}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} color={theme.text} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color={theme.text} />
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
    borderBottomWidth: 1,
  },

  logo: {
    fontWeight: "bold",
    fontSize: 24,
  },

  search: {
    flex: 1,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 40,
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  icons: {
    flexDirection: "row",
    gap: 15,
  },
});