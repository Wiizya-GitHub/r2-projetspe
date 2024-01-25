// TaskManager.tsx
import React from 'react';
import { View, Text } from 'react-native';
import TaskManagerComponent from './TaskManagerComponent'; // Nom du composant que vous avez créé précédemment

const TaskManager = () => {
  return (
    <View>
      <Text>Task Manager</Text>
      <TaskManagerComponent />
    </View>
  );
};

export default TaskManager;
