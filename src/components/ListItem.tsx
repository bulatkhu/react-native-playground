import { StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import { ListItemType } from "../../App";
import { Button, Checkbox, Input, Stack, Text } from "native-base";
import useCustomTheme from "../hooks/useCustomTheme";
import DropShadow from "react-native-drop-shadow";

type ListItemActions = {
  deleteTodo: (key: string) => void;
  modifyTodo: (
    todo: Partial<ListItemType> & { key: ListItemType["key"] },
  ) => void;
};

type Props = { item: ListItemType; index: number } & ListItemActions;

const ListItem: FC<Props> = ({ item, index, deleteTodo, modifyTodo }) => {
  const [text, setText] = useState(item.text);
  const [modify, setModify] = useState(false);

  const {
    colors: { baseWhite, baseBorderColor },
  } = useCustomTheme();

  return (
    <DropShadow
      style={{
        shadowColor: baseBorderColor,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
      }}
    >
      <Stack
        borderRadius={10}
        style={[styles.root, { borderColor: baseBorderColor }]}
        bg={baseWhite}
      >
        <Checkbox
          value=""
          isChecked={item.status}
          onChange={status => modifyTodo({ status, key: item.key })}
        >
          &nbsp;
        </Checkbox>
        {modify ? (
          <Input
            variant="rounded"
            maxW="100%"
            placeholder="Input"
            value={text}
            onChangeText={setText}
          />
        ) : (
          <Text fontSize="md">
            {index}) {item.text}
          </Text>
        )}
        <Button size="sm" onPress={() => deleteTodo(item.key)}>
          Delete
        </Button>
        <Button
          size="sm"
          onPress={() => {
            setText(item.text);
            setModify(flag => {
              const newFlag = !flag;
              if (!newFlag) {
                modifyTodo({ ...item, text });
              }
              return newFlag;
            });
          }}
        >
          {modify ? "Save" : "Modify"}
        </Button>
      </Stack>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  fields: {},
  actions: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ListItem;
