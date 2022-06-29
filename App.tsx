import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// import uuid from "react-native-uuid";
import { Text } from "native-base";
import TaskItem from "./src/components/TaskItem";

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
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <TaskItem>Task item</TaskItem>
          <TaskItem>Task item</TaskItem>
          <TaskItem>Task item</TaskItem>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    padding: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  items: {},
});

export default App;
