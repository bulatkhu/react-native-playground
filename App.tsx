import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// import uuid from "react-native-uuid";
import { Text } from "native-base";
import TaskItem from "./src/components/TaskItem";
import TaskInput from "./src/components/TaskInput";

export type ListItemType = { key: string; text: string; status: boolean };

// const generateTodos: ListItemType[] = [
//   {
//     key: uuid.v4() as unknown as string,
//     text: "Make a steak 1",
//     status: false,
//   },
//   {
//     key: uuid.v4() as unknown as string,
//     text: "Make a steak 2",
//     status: false,
//   },
//   {
//     key: uuid.v4() as unknown as string,
//     text: "Make a steak 3",
//     status: false,
//   },
//   {
//     key: uuid.v4() as unknown as string,
//     text: "Make a steak 4",
//     status: false,
//   },
// ];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <TaskItem>Task item1</TaskItem>
          <TaskItem>Task item</TaskItem>
          <TaskItem>Task item</TaskItem>
        </View>
      </View>
      <TaskInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    padding: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  items: {},
});

export default App;
