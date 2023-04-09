import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleAddTodo = () => {
    setTodos([...todos, {name: "new todo"}])
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <View style={styles.container}>
      <Text>Todo list</Text>
      <TextInput
        onChange={handleInputChange}
        value={inputValue}
      />

      <Button
        onPress={handleAddTodo}
        title="Add todo"
        color="#841584"
      />
      {todos && todos.map((todo) => {
        return (
            <Text>{todo.name}</Text>
        )
      })}
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
