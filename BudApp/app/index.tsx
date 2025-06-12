import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface BudItem {
  id: string;
  name: string;
  category: string;
  dateAdded: string;
}

export default function HomeScreen() {
  const [buds, setBuds] = useState<BudItem[]>([
    {
      id: '1',
      name: 'Morning Meditation',
      category: 'Wellness',
      dateAdded: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      name: 'Coffee with Sarah',
      category: 'Social',
      dateAdded: new Date().toLocaleDateString(),
    },
  ]);
  
  const [newBudName, setNewBudName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Personal');

  const categories = ['Personal', 'Work', 'Social', 'Wellness', 'Learning'];

  const addBud = () => {
    if (newBudName.trim()) {
      const newBud: BudItem = {
        id: Date.now().toString(),
        name: newBudName.trim(),
        category: selectedCategory,
        dateAdded: new Date().toLocaleDateString(),
      };
      setBuds([newBud, ...buds]);
      setNewBudName('');
      Alert.alert('Success', 'New bud added!');
    } else {
      Alert.alert('Error', 'Please enter a bud name');
    }
  };

  const deleteBud = (id: string) => {
    Alert.alert(
      'Delete Bud',
      'Are you sure you want to delete this bud?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => setBuds(buds.filter(bud => bud.id !== id)),
        },
      ]
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Personal: '#FF6B6B',
      Work: '#4ECDC4',
      Social: '#45B7D1',
      Wellness: '#96CEB4',
      Learning: '#FFEAA7',
    };
    return colors[category] || '#DDD';
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Buds</Text>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push('/profile')}
          >
            <Ionicons name="person-circle-outline" size={32} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Add New Bud Section */}
        <View style={styles.addSection}>
          <Text style={styles.sectionTitle}>Add New Bud</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter bud name..."
            value={newBudName}
            onChangeText={setNewBudName}
            placeholderTextColor="#999"
          />
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryChip,
                  {
                    backgroundColor: selectedCategory === category ? getCategoryColor(category) : '#f0f0f0',
                  },
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    { color: selectedCategory === category ? '#fff' : '#333' },
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.addButton} onPress={addBud}>
            <Ionicons name="add-circle" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Add Bud</Text>
          </TouchableOpacity>
        </View>

        {/* Buds List */}
        <View style={styles.budsSection}>
          <Text style={styles.sectionTitle}>Your Buds ({buds.length})</Text>
          {buds.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="leaf-outline" size={64} color="#ccc" />
              <Text style={styles.emptyText}>No buds yet!</Text>
              <Text style={styles.emptySubtext}>Add your first bud above</Text>
            </View>
          ) : (
            buds.map((bud) => (
              <View key={bud.id} style={styles.budCard}>
                <View style={styles.budHeader}>
                  <View style={styles.budInfo}>
                    <Text style={styles.budName}>{bud.name}</Text>
                    <View style={styles.budMeta}>
                      <View
                        style={[
                          styles.categoryBadge,
                          { backgroundColor: getCategoryColor(bud.category) },
                        ]}
                      >
                        <Text style={styles.categoryBadgeText}>{bud.category}</Text>
                      </View>
                      <Text style={styles.dateText}>{bud.dateAdded}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteBud(bud.id)}
                  >
                    <Ionicons name="trash-outline" size={20} color="#ff4757" />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileButton: {
    padding: 5,
  },
  addSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
    gap: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  budsSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 15,
    fontWeight: '600',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  budCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  budHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  budInfo: {
    flex: 1,
  },
  budName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  budMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  deleteButton: {
    padding: 5,
  },
});