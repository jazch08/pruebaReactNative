import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Switch } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getTodoById, updateTodo, deleteTodo } from '@/services/apiService';

export default function TaskDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [task, setTask] = useState({ id: 0, title: '', completed: false });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTodoById(id);
        setTask(data);
      } catch (error) {
        Alert.alert('Error', 'No se pudo cargar la tarea');
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleSave = async () => {
    try {
      await updateTodo(task.id, { title: task.title, completed: task.completed });
      Alert.alert('Éxito', 'Tarea actualizada correctamente');
      setEditing(false);
    } catch (error) {
      Alert.alert('Error', 'No se pudo actualizar la tarea');
    }
  };

  const handleDelete = async () => {
    Alert.alert(
      'Eliminar Tarea',
      '¿Estás seguro de que quieres eliminar esta tarea?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: async () => {
            try {
              await deleteTodo(task.id);
              Alert.alert('Éxito', 'Tarea eliminada correctamente');
              router.back();
            } catch (error) {
              Alert.alert('Error', 'No se pudo eliminar la tarea');
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const toggleStatus = () => {
    setTask({ ...task, completed: !task.completed });
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Tarea</Text>
      <TextInput
        style={styles.input}
        value={task.title}
        onChangeText={(text) => setTask({ ...task, title: text })}
        editable={editing}
      />
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Estado:</Text>
        <Switch
          value={task.completed}
          onValueChange={toggleStatus}
          disabled={!editing} // Solo permite cambiar el estado si está en modo edición
        />
        <Text style={styles.statusText}>
          {task.completed ? 'Completada' : 'Pendiente'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {editing ? (
          <Button title="Guardar" onPress={handleSave} />
        ) : (
          <Button title="Editar" onPress={() => setEditing(true)} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Eliminar Tarea"
          onPress={handleDelete}
          color="red"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusText: {
    fontSize: 16,
    marginRight: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
});