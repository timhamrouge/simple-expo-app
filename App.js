
import { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const Item = ({todo, handleDeleteTodo}) => (
  <View style={styles.row}>
    <Text>{todo.name}</Text>
    <Button onPress={handleDeleteTodo(todo)} title="Delete"></Button>
  </View>
);


export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleAddTodo = () => {
    setTodos([...todos, {id: todos.length, name: inputValue}])
  }

  const handleInputChange = (text) => {
    setInputValue(text)
  }

  const handleDeleteTodo = (todo) => {
    return () => {
      setTodos(todos.filter(oldTodo => { return oldTodo.id !== todo.id }))
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text>Todo list</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputValue}
        />

      <Button
        onPress={handleAddTodo}
        title="Add todo"
        color="#841584"
        />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Item
            todo={item}
            handleDeleteTodo={handleDeleteTodo}
            key={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: "70%"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 10,
  }
});
