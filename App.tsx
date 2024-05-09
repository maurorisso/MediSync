import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PatientDetailsScreen from "./screens/PatientDetailsScreen";
import React from "react";
import { AppStackParameterList } from "./types/navigation";

const App = () => {
  const Stack = createNativeStackNavigator<AppStackParameterList>(); // Make sure to define RootStackParamList
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedScreen"
          options={{ title: "" }}
          component={PatientDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
