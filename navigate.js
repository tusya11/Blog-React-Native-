import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./components/Main";
import { Contact } from "./components/Contact";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Главная",
            headerStyle: { backgroundColor: "#eb5d3d", height: 100 },
            headerTitleStyle: { fontWeight: "400" },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Контакты" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
