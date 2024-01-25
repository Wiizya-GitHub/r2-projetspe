// HouseholdTasks.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import UserDropdown from "../../components/UserDropdown";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HouseholdTasks = ({ navigation }: RouterProps) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("todo");

  // Ajouter une tâche ménagère
  const addTask = () => {
    if (newTask.trim() && assignee.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), title: newTask, assignee, status },
      ]);
      setNewTask("");
      setAssignee("");
      setStatus("todo");
    }
  };

   // Modifier l'état d'une tâche
   const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des Tâches Ménagères</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de la tâche"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Assigner à"
        value={assignee}
        onChangeText={(text) => setAssignee(text)}
      />
      <Button title="Ajouter une tâche" onPress={addTask} />

      {/* Liste des Tâches Ménagères */}
      <Text style={styles.title}>Liste des Tâches Ménagères</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, styles.cell]}>Nom</Text>
          <Text style={[styles.headerText, styles.cell]}>Assignée à</Text>
          <Text style={[styles.headerText, styles.cell]}>État</Text>
        </View>
        {tasks.map((task) => (
            <View key={task.id} style={styles.taskRow}>
              <Text style={[styles.cell, { flex: 2 }]}>{task.title}</Text>
              <Text style={[styles.cell, { flex: 1 }]}>{task.assignee}</Text>
              <View style={[styles.statusDropdownContainer, styles.cell, { flex: 2 }]}>
                <RNPickerSelect
                  value={task.status}
                  onValueChange={(itemValue) => updateTaskStatus(task.id, itemValue)}
                  items={[
                    { label: 'À faire', value: 'todo' },
                    { label: 'En cours', value: 'inProgress' },
                    { label: 'Terminé', value: 'done' },
                  ]}
                  style={{
                    inputIOS: {
                      fontSize: 16,
                      paddingVertical: 12,
                      paddingHorizontal: 10,
                      borderWidth: 1,
                      borderColor: 'gray',
                      borderRadius: 4,
                      color: 'black',
                      paddingRight: 30,
                    },
                  }}
                />
              </View>
            </View>
          ))}
      </View>
    </View>
  </SafeAreaView>
  );
};

export default HouseholdTasks;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      },
      container: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 10,
      },
      input: {
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
      },
      tableContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginTop: 10,
      },
      tableHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#f0f0f0",
        padding: 10,
      },
      headerText: {
        fontWeight: "bold",
      },
      taskRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      statusDropdownContainer: {
        flex: 1,
      },
      cell: {
        textAlign: 'center',
      },
});
