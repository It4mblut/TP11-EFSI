import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Feed from "../components/Feed";
import BottomBar from "../components/BottomBar";

function HomeScreen() {

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.feedContainer}>
        <Feed />
      </View>

      <BottomBar />

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(0,0,59)",
  },

  feedContainer: {
    flex: 1,
    paddingBottom: 70,
  },

});


export default HomeScreen;