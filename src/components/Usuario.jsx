import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Usuario() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const usuario = {
    nombre: "Juan López",
    username: "@juancito.loPz",
    bio: "Solo alguien que ama a los gatos",
    seguidores: 1300,
    seguidos: 430,
    publicaciones: 24,
    foto: "https://fotografias-atreseries.atresmedia.com/clipping/cmsimages02/2018/06/06/54229044-BF06-42B7-A62E-AC06B1348713/70.jpg?crop=1574,885,x0,y42&width=480&height=270&optimize=high&format=webply",
  };

  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=24")
      .then((respuesta) => {
        setPublicaciones(respuesta.data);
      })
      .catch(console.log);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.info}>
        <Image source={{ uri: usuario.foto }} style={styles.avatar} />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={[styles.numero, { color: theme.text }]}>
              {usuario.publicaciones}
            </Text>
            <Text style={[styles.label, { color: theme.textSecondary }]}>
              Posts
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={[styles.numero, { color: theme.text }]}>
              {usuario.seguidores}
            </Text>
            <Text style={[styles.label, { color: theme.textSecondary }]}>
              Seguidores
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={[styles.numero, { color: theme.text }]}>
              {usuario.seguidos}
            </Text>
            <Text style={[styles.label, { color: theme.textSecondary }]}>
              Siguiendo
            </Text>
          </View>
        </View>
      </View>

      <Text style={[styles.nombre, { color: theme.text }]}>
        {usuario.nombre}
      </Text>

      <Text style={[styles.bio, { color: theme.textSecondary }]}>
        {usuario.bio}
      </Text>

      <TouchableOpacity
        style={[
          styles.themeButton,
          { backgroundColor: theme.cardBg, borderColor: theme.border },
        ]}
        onPress={toggleTheme}
      >
        <Text style={[styles.themeButtonText, { color: theme.text }]}>
          Modo {theme.isDarkMode ? "Claro" : "Oscuro"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={publicaciones}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 90,
        }}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.post} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  info: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  stat: {
    alignItems: "center",
  },

  numero: {
    fontWeight: "bold",
    fontSize: 18,
  },

  label: {
    fontSize: 13,
  },

  nombre: {
    fontWeight: "bold",
    fontSize: 20,
  },

  bio: {
    marginTop: 5,
  },

  themeButton: {
    marginTop: 15,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
  },

  themeButtonText: {
    fontSize: 13,
    fontWeight: "bold",
  },

  post: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
  },
});