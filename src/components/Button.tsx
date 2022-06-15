import React, { FC, RefAttributes } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  PressableProps,
} from "react-native";

const Button: FC<
  PressableProps & RefAttributes<View> & { title: string; size?: "sm" | "md" }
> = props => {
  const { onPress, title = "Save", size = "sm" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={[styles.text, styles[size]]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sm: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    elevation: 1,
    fontSize: 13,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Button;
