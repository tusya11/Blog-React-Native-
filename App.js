import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainStack from "./navigate";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./fonts/Montserrat-SemiBold.ttf"),
    "mt-light": require("./fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [isFont, setIsFont] = useState(false);

  if (isFont) {
    return <MainStack />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setIsFont(true)}
        onError={console.warn}
      />
    );
  }
}
