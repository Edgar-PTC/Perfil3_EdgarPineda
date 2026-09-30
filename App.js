import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import './global.css';

import Home from "./src/screens/Home";
import DragonBall from "./src/screens/DragonBall";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="DragonBall"
          component={DragonBall}
          options={{ title: "DragonBall", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}