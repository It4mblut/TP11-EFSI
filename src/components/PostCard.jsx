import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PostCard({ post, abrirPost }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => abrirPost(post)}
    >
      <View style={styles.header}>
        <Text style={styles.username}>
          {post.username}
        </Text>
      </View>

      <Image
        source={{ uri: post.url }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.likes}>
          {post.likes} Me gusta
        </Text>

        <Text style={styles.description}>
          <Text style={{ fontWeight: "bold" }}>
            {post.username}
          </Text>{" "}
          {post.descripcion}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#151535",
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 12,
    marginBottom: 18,
  },

  header: {
    padding: 12,
  },

  username: {
    color: "white",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    aspectRatio: 1,
  },

  info: {
    padding: 12,
  },

  likes: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 6,
  },

  description: {
    color: "white",
  },
});