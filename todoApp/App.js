import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import {ToDoCard} from './components';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoId, setId] = useState(0);

  const addTodo = () => {
    for (let item of todoList) {
      if (item.text == todo) {
        return alert("You've already had this ToDo!");
      }
    }
    setTodoList([{text: todo, id: todoId}, ...todoList]);
  };

  const getInput = (text) => {
    setTodo(text);
  };

  const deleteTodo = (currentTodosId) =>
    setTodoList(todoList.filter((todo) => todo.id !== currentTodosId));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>TODO</Text>
        <Text style={styles.counter}>{todoList.length}</Text>
      </View>

      <View style={styles.main}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todoList}
          renderItem={({item}) => (
            <ToDoCard content={item} deleteTodo={deleteTodo} />
          )}
        />
      </View>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Type here to add your ToDo!"
          onChangeText={getInput}
          onSubmitEditing={(event) => {
            setTodo(event.nativeEvent.text);
            addTodo();
            setId(todoId + 1);
            setTodo('');
          }}
          autoFocus={true}
          value={todo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addTodo();
            setId(todoId + 1);
            setTodo('');
          }}>
          <Text style={styles.btnText}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 126, 229)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  heading: {
    color: '#FBA730',
    fontWeight: 'bold',
    fontSize: 35,
  },
  counter: {
    color: '#FBA730',
    fontSize: 30,
  },

  main: {
    flex: 1,
    alignItems: 'center',
  },

  footer: {
    backgroundColor: '#B0BEC5',
    marginHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 5,
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: '32%',
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'rgb(37, 61, 144)',
    width: '50%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default App;
