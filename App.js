
import { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const ButtonText = (completedStatus) => (
  completedStatus ? "Not complete" : "Complete"
);

const Item = ({todo, handleDeleteTodo, handleCompleteTodo}) => (
  <View style={styles.row}>
    <Text>{todo.name} - {String(todo.completed)}</Text>
    <Button onPress={handleCompleteTodo(todo)} title={ButtonText(todo.completed)}></Button>
    <Button onPress={handleDeleteTodo(todo)} title="Delete"></Button>
  </View>
);


export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleAddTodo = () => {
    setTodos([...todos, {id: todos.length, name: inputValue, completed: false}])
  }

  const handleInputChange = (text) => {
    setInputValue(text)
  }

  const handleDeleteTodo = (todo) => {
    return () => {
      setTodos(todos.filter(oldTodo => { return oldTodo.id !== todo.id }))
    }
  }

  const handleCompleteTodo = (todo) => {
    return () => {
      setTodos(todos.map(oldTodo => { 
        if (oldTodo.id === todo.id) {
          oldTodo.completed = !oldTodo.completed
        }
        return oldTodo
      }))
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text>Todo list</Text>
      <View style={styles.todoAdder}>

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
      </View>
      <FlatList
        style={styles.todoList}
        data={todos}
        renderItem={({ item }) => (
          <Item
            todo={item}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
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
    marginTop: 100
  },
  input: {
    borderWidth: 1,
    width: "70%"
  },
  todoAdder: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 10,
  },
  todoList: {
    maxHeight: 300
  }
});
