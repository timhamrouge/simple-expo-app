import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = () => {
    setTodos([...todos, {name: 'new todo']})
  }

  return (
    <View style={styles.container}>
      <Text>Todo list</Text>
      <TextInput
        value="hello world"
      />
      <Button
        onPress={onAddTodo}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {todos.map((todo) => {
        return (
          <div>
            {todo}
          </div>
        )
      })}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
