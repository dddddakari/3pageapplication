import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; 

const recentSearches = [
  { id: '1', name: 'POOJA!!!', handle: '@PoojaMe...' },
  { id: '2', name: 'Nasir Ah...', handle: '@elrufai' },
  { id: '3', name: 'Instablog...', handle: '@instablog...' },
  { id: '4', name: 'FC Baree...', handle: '@FCBarcel...' },
  { id: '5', name: 'Omoyele', handle: '@YeleScotch' },
  { id: '6', name: 'ifeluv', handle: 'oluwadolarz' },
  { id: '7', name: 'uk', handle: '' },
];

export default function SearchScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="black"
        />
      </View>
      <ThemedText type="title" style={styles.title}>Recent searches</ThemedText>
      <FlatList
        data={recentSearches}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <View style={styles.searchItem}>
            <Image
              source={require('@/assets/images/profile.png')} 
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
              <ThemedText type="default">{item.handle}</ThemedText>
            </View>
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
    paddingTop: 50, 
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  title: {
    marginBottom: 16,
  },
  flatListContent: {
    paddingBottom: 50, 
  },
  searchItem: {
    width: 100, 
    marginRight: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'center',
  },
});