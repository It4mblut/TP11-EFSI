import {  FlatList,  Image,  StyleSheet,  Text,  View,} from "react-native";

  import axios from "axios";
import { useEffect, useState } from "react";
export default function Usuario() {
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
    .then((respuesta)=>{

      setPublicaciones(respuesta.data);

    })
    .catch(console.log);

}, []);

  return (
    <View style={styles.container}>

      <View style={styles.info}>

        <Image
          source={{ uri: usuario.foto }}
          style={styles.avatar}
        />

        <View style={styles.stats}>

          <View style={styles.stat}>
            <Text style={styles.numero}>
              {usuario.publicaciones}
            </Text>

            <Text style={styles.label}>
              Posts
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.numero}>
              {usuario.seguidores}
            </Text>

            <Text style={styles.label}>
              Seguidores
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.numero}>
              {usuario.seguidos}
            </Text>

            <Text style={styles.label}>
              Siguiendo
            </Text>
          </View>

        </View>

      </View>

      <Text style={styles.nombre}>
        {usuario.nombre}
      </Text>

      <Text style={styles.bio}>
        {usuario.bio}
      </Text>

      <FlatList
  data={publicaciones}
  keyExtractor={(item)=>item.id}
  numColumns={3}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{
    paddingTop:20,
    paddingBottom:90,
  }}

  renderItem={({item})=>(

    <Image
      source={{uri:item.url}}
      style={styles.post}
    />

  )}
/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(0,0,59)",
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
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  label: {
    color: "#ccc",
    fontSize: 13,
  },

  nombre: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  bio: {
    color: "#ddd",
    marginTop: 5,
  },

  post: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
  },

});