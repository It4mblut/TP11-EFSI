import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context";
import StackNavigator from "./navigation/StackNavigator";
import BottomBar from "./components/BottomBar";


export default function App() {

  return (
    <SafeAreaProvider>

      <NavigationContainer>

        <SafeAreaView style={styles.safe}>

          <StatusBar style="light" />

          <View style={styles.container}>

            <StackNavigator />

            <BottomBar />

          </View>

        </SafeAreaView>

      </NavigationContainer>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: "rgb(0,0,59)",
  },

  container: {
    flex: 1,
  },

});