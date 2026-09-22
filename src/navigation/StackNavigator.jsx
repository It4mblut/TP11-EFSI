import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import Usuario from "../components/Usuario";
import PostDetallado from "../components/PostDetallado";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "rgb(0,0,59)",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="Detalle"
        component={PostDetallado}
      />

      <Stack.Screen
        name="Perfil"
        component={Usuario}
      />
    </Stack.Navigator>
  );
}