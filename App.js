import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import { v4 as uuid } from "uuid";

const todoList = () => {
    return [
        {id: uuid(), text: "Make a steak", status: false},
        {id: uuid(), text: "Make a steak", status: false},
        {id: uuid(), text: "Make a steak", status: false},
        {id: uuid(), text: "Make a steak", status: false}
    ]
}

const App = () => {

    const todos = todoList();

    return (
        <View style={styles.container}>
            <Text>Start</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default App;
