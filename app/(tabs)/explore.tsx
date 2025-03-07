import { StyleSheet, TextInput, Button, View, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { createTodo } from '@/services/apiService';

export default function TabTwoScreen() {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [creatingTask, setCreatingTask] = useState(false);

  const createNewTask = async () => {
    if (!newTaskTitle.trim()) {
      Alert.alert('Error', 'El título de la tarea no puede estar vacío');
      return;
    }

    setCreatingTask(true);
    try {
      await createTodo({ title: newTaskTitle, completed: false });
      setNewTaskTitle('');
      Alert.alert('Éxito', 'Tarea creada con éxito');
    } catch (error) {
      Alert.alert('Error', 'No se pudo crear la tarea');
    } finally {
      setCreatingTask(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTaskTitle}
        onChangeText={setNewTaskTitle}
        placeholder="Ingrese el título de la tarea"
      />
      <Button
        onPress={createNewTask}
        title={creatingTask ? 'Creando tarea...' : 'Crear tarea'}
        disabled={creatingTask || !newTaskTitle.trim()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});