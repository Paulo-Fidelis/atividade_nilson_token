import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/usuario')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.log("Erro ao buscar usuários:", err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários Cadastrados</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.email}>{item.senha}</Text>
            <Text style={styles.email}>{item.token}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff'
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 15
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  nome: {
    fontSize: 18, fontWeight: 'bold'
  },
  email: {
    fontSize: 16, color: '#555'
  }
});
