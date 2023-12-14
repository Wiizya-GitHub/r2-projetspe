import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const TodoItem = ({ id, title, completed, onDelete, onToggle }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <MaterialIcons
          name={completed ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Text style={completed ? styles.completed : null}>{title}</Text>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
