import { NativeBaseProvider } from "native-base";
import React from "react";
import baseTheme from "./src/theme";
import App from "./App";

const Root = () => {
  return (
    <NativeBaseProvider theme={baseTheme}>
      <App />
    </NativeBaseProvider>
  );
};

export default Root;
