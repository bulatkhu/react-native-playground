import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../form/FormInput";

const TaskInput = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      task: "",
    },
  });

  const onSubmit = handleSubmit(data => {
    Alert.alert(JSON.stringify(data));
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inputSection}>
        <FormInput
          wrapperStyles={styles.inputWrapper}
          name="task"
          control={control}
          rules={{ required: "Field in required" }}
          style={styles.input}
        />
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputWrapper: {
    flex: 1,
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  error: {
    backgroundColor: "red",
  },
  input: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 60,
    maxHeight: 45,
    marginRight: 20,
  },
  btn: {
    width: 60,
    borderRadius: 52,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 50,
    fontWeight: "300",
  },
});

export default TaskInput;
