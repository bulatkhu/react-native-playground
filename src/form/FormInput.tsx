import React from "react";
import {
  TextInput,
  Text,
  TextInputProps,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { FieldPath, useController, UseControllerProps } from "react-hook-form";

type Props = TextInputProps & { wrapperStyles?: ViewProps["style"] };

const FormInput = <TFieldValues, T>(
  props: UseControllerProps<TFieldValues, FieldPath<TFieldValues>> & Props,
) => {
  const { control, rules, shouldUnregister, name, defaultValue, ...rest } =
    props;

  const { field, fieldState } = useController({
    control,
    rules,
    shouldUnregister,
    name,
    defaultValue,
  });

  const error = fieldState.error
    ? fieldState.error.message ||
      (fieldState.error.type === "required" && "Field is required")
    : false;

  return (
    <View style={[rest.wrapperStyles, styles.wrapper]}>
      <TextInput
        {...rest}
        ref={field.ref}
        onChangeText={field.onChange}
        value={(field.value ?? "") as string}
        onBlur={field.onBlur}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  errorMessage: {
    position: "absolute",
    top: "90%",
    textAlign: "center",
    width: "100%",
    color: "red",
  },
});

export default FormInput;
