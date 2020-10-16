import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const ToDoCard = ({content, deleteTodo}) => {
  const [time, setTime] = useState(Date().split(' ').slice(0, 5).join(' - '));

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.todo}>{content.text}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <TouchableWithoutFeedback
        style={styles.deleteBtn}
        onPress={() => {
          deleteTodo(content.id);
        }}>
        <Text style={styles.delBtnText}>X</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#546E7A',
    width: Dimensions.get('window').width * 0.9,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  todo: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 17,
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
    color: '#FBA730',
  },
  delBtnText: {
    color: '#e53935',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: 17,
  },
});

export {ToDoCard};