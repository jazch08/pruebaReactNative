// app/(tabs)/users.tsx
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { getUsers } from '@/services/apiService';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />;
  }

  if (error) {
    return <ThemedText>{error}</ThemedText>;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Listado de Usuarios</ThemedText>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>@{item.username}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
            <Text style={styles.address}>
              {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
            </Text>
            <Text style={styles.company}>{item.company.name}</Text>
            <Text style={styles.catchPhrase}>{item.company.catchPhrase}</Text>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  catchPhrase: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});