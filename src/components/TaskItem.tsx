import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TaskItem: FC<{ children: string }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} />
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.itemRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "rgba(85, 188, 246, 0.4);",
    marginRight: 15,
  },
  text: {},
  itemRight: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#55BCF6",
  },
});

export default TaskItem;
