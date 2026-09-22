import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PostDetallado({ route, navigation }) {
  const { post } = route.params;
const comentarios = [
  {
    id: "1",
    usuario: "@gatitosLindos",
    texto: "Que hermoso gatito"
  },
  {
    id: "2",
    usuario: "@michi_fan",
    texto: "Necesito uno así en mi casa jajaja"
  },
   {
  },
];
  const [likes, setLikes] = useState(post.likes);
  const [likeado, setLikeado] = useState(false);

  function toggleLike() {
    if (likeado) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLikeado(!likeado);
  }

  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={28}
          color="white"
        />

        <Text style={styles.backText}>
          Volver
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>

        <View style={styles.header}>
          <Ionicons
            name="person-circle"
            size={36}
            color="white"
          />

          <Text style={styles.username}>
            {post.username}
          </Text>
        </View>

        <Image
          source={{ uri: post.url }}
          style={styles.image}
        />

        <View style={styles.actions}>

          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              name={likeado ? "heart" : "heart-outline"}
              size={30}
              color={likeado ? "red" : "white"}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={28}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="paper-plane-outline"
              size={28}
              color="white"
            />
          </TouchableOpacity>

        </View>

        <Text style={styles.likes}>
          {likes} Me gusta
        </Text>

        <Text style={styles.description}>
          <Text style={{ fontWeight: "bold" }}>
            {post.username}
          </Text>{" "}
          {post.descripcion}
        </Text>
        <View style={styles.comentariosContainer}>

<Text style={styles.tituloComentarios}>
  Comentarios
</Text>


{
  comentarios.map((comentario)=>(

    <View
      key={comentario.id}
      style={styles.comentario}
    >

      <Text style={styles.usuarioComentario}>
        {comentario.usuario}
      </Text>

      <Text style={styles.textoComentario}>
        {comentario.texto}
      </Text>

      <Text style={styles.fechaComentario}>
        {comentario.fecha}
      </Text>

    </View>

  ))
}
</View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(0,0,59)",
    padding: 15,
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },

  backText: {
    color: "white",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#151535",
    borderRadius: 14,
    overflow: "hidden",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
  },

  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  image: {
    width: "100%",
    height: 380,
  },

  actions: {
    flexDirection: "row",
    gap: 18,
    padding: 12,
  },

  likes: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 12,
  },

  description: {
    color: "white",
    padding: 12,
  },

  comentariosContainer:{
  padding:12,
  marginTop:10,
},


tituloComentarios:{
  color:"white",
  fontSize:18,
  fontWeight:"bold",
  marginBottom:15,
},


comentario:{
  marginBottom:15,
  borderBottomWidth:1,
  borderBottomColor:"#333",
  paddingBottom:10,
},


usuarioComentario:{
  color:"white",
  fontWeight:"bold",
  fontSize:14,
},


textoComentario:{
  color:"#ddd",
  marginTop:3,
},


fechaComentario:{
  color:"#888",
  fontSize:12,
  marginTop:3,
},
});