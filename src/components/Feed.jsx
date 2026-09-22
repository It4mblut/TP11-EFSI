import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {ActivityIndicator,FlatList,Image,StyleSheet,Text,View,} from "react-native";

import PostCard from "./PostCard";

export default function Feed() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const historias = [
    {
      id: "1",
      usuario: "@gatitosLindos",
      foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
    },
    {
      id: "2",
      usuario: "@amoGatitos",
      foto: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww",
    },
    {
      id: "3",
      usuario: "@gatoo67",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNBLmnNWfkgI83S1NuVF2k6dMjISlhRVMKQ&s",
    },
    {
      id: "4",
      usuario: "@gatitos_",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bFJhvKYCa7KA85tr7HmB5ua-PHqBnU5KkQ&s",
    },
    {
      id: "5",
      usuario: "@xXmichisXx",
      foto: "https://www.clarin.com/2024/07/04/uteodLeuh_2000x1500__1.jpg",
    },
{
      id: "6",
      usuario: "@gat0z_",
      foto: "https://cdn2.thecatapi.com/images/182.jpg",
    },
    {
      id: "7",
      usuario: "@C4t",
      foto: "https://cdn2.thecatapi.com/images/2en.jpg",
    },
    {
      id: "8",
      usuario: "@CDN",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZe-5VjXmag6NrQhcAzS-JbcnOzUx_jguQw&s",
    },
    {
      id: "9",
      usuario: "@gat0_o",
      foto: "https://cdn2.thecatapi.com/images/38g.jpg",
    }
  ];

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=20")
      .then((res) => {
        const datos = res.data.map((item, index) => ({
          id: item.id,
          url: item.url,
          username: `@amoGatitos`,
          descripcion: "Otro gatito haciendo cosas de gatos.",
          likes: Math.floor(Math.random() * 900 + 100),
        }));

        setPosts(datos);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <FlatList
  style={{ flex: 1 }}
  data={posts}
  keyExtractor={(item) => item.id}
  nestedScrollEnabled={true}
  contentContainerStyle={{ paddingBottom: 90 }}


ListHeaderComponent={
  <View>

    <FlatList
      horizontal
      data={historias}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true}
      contentContainerStyle={styles.historias}
      renderItem={({ item }) => (

        <View style={styles.historia}>

          <Image
            source={{ uri: item.foto }}
            style={styles.fotoHistoria}
          />

          <Text style={styles.usuarioHistoria}>
            {item.usuario}
          </Text>

        </View>

      )}
    />

  </View>
}


      renderItem={({ item }) => (
        <PostCard
          post={item}
          abrirPost={(post) =>
            navigation.navigate("Detalle", { post })
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

historias: {
  paddingVertical: 15,
  paddingHorizontal: 10,
},

historia: {
  alignItems: "center",
  marginRight: 18,
  width: 75,
},
  fotoHistoria: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#ff00aa",
  },

  usuarioHistoria: {
    color: "white",
    fontSize: 11,
    marginTop: 6,
  },
});