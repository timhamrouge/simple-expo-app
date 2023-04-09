import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleAddTodo = () => {
    setTodos([...todos, {name: inputValue}])
  }

  const handleInputChange = (text) => {
    setInputValue(text)
  }

  return (
    <View style={styles.container}>
      <Text>Todo list</Text>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
      />
      <Text>{inputValue}</Text>

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
