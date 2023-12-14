import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
    StyleSheet,
    FlatList,
    TextInput,
    SafeAreaView,
  } from "react-native";
  import TodoItem from "../../components/TodoItem";
  import Filters from "../../components/Filters";

interface RouterProps {
    navigation : NavigationProp<any, any>;
}

const List = ({ navigation} : RouterProps) => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [filter, setFilter] = useState("all");

    // Supprimer les tâches

    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Changer l'état des tâches

    const toggleTodo = (id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      );
    };

    // Ajouter une tâche

    const addTodo = () => {
      if (newTodo.trim()) {
        setTodos([
          ...todos,
          { id: Date.now().toString(), title: newTodo, completed: false },
        ]);
        setNewTodo("");
      }
    };

    // Filtrer les tâches

    const filteredTodos = todos.filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });

    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.title}>Liste de tâches</Text>
          <View style={styles.inline}>
            <TextInput
              style={styles.input}
              placeholder="Ajouter une nouvelle tâche..."
              value={newTodo}
              onChangeText={setNewTodo}
              onSubmitEditing={addTodo}
            />
            <Button style={styles.addbutton} title="Ajouter" onPress={addTodo} />
          </View>
          <Filters currentFilter={filter} setFilter={setFilter} />
          <FlatList
            data={filteredTodos}
            renderItem={({ item }) => (
              <TodoItem
                id={item.id}
                title={item.title}
                completed={item.completed}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    );
}

export default List;

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
      width: "auto",
      flex: 1,
    },
    inline: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      paddingHorizontal: 10
    },
    title:{
      fontSize: 24,
      display: "flex",
      textAlign: "center",
      marginBottom: 20
    }
  });
