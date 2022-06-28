import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import ListItem from "./src/components/ListItem";
import useCustomTheme from "./src/hooks/useCustomTheme";
import { Text } from "native-base";

export type ListItemType = { key: string; text: string; status: boolean };

const generateTodos: ListItemType[] = [
  {
    key: uuid.v4() as unknown as string,
    text: "Make a steak 1",
    status: false,
  },
  {
    key: uuid.v4() as unknown as string,
    text: "Make a steak 2",
    status: false,
  },
  {
    key: uuid.v4() as unknown as string,
    text: "Make a steak 3",
    status: false,
  },
  {
    key: uuid.v4() as unknown as string,
    text: "Make a steak 4",
    status: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(generateTodos);

  const theme = useCustomTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.baseGray }]}
    >
      <Text bold fontSize="2xl" style={{ marginBottom: 30 }}>
        Today’s tasks
      </Text>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => {
          return (
            <ListItem
              item={item}
              index={index + 1}
              deleteTodo={key => {
                setTodos(todos => todos.filter(todo => todo.key !== key));
              }}
              modifyTodo={newTodo => {
                setTodos(todos =>
                  todos.map(todo =>
                    todo.key === newTodo.key ? { ...todo, ...newTodo } : todo,
                  ),
                );
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
});

export default App;
