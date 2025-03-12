import { useColorScheme } from '../../hooks/useColorScheme';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

const notifications = [
  { id: '1', type: 'like', user: 'Dakari', text: 'liked your post', time: '2h' },
  { id: '2', type: 'retweet', user: 'ProfessorHaifi', text: 'retweeted your post', time: '4h' },
  { id: '3', type: 'retweet', user: 'SAIT', text: 'retweeted your post', time: '6h' },
  { id: '4', type: 'retweet', user: 'Saheed', text: 'retweeted your post', time: '8h' },
  { id: '5', type: 'like', user: 'Hotdogs', text: 'liked your post', time: '10h' },
  { id: '6', type: 'like', user: 'Puppies', text: 'liked your post', time: '12h' },
  { id: '7', type: 'like', user: 'Kittens', text: 'liked your post', time: '14h' },
  { id: '8', type: 'retweet', user: 'Babies', text: 'retweeted your post', time: '16h' },
  { id: '9', type: 'like', user: 'Minions', text: 'liked your post', time: '18h' },
  { id: '10', type: 'retweet', user: 'Puppies', text: 'retweeted your post', time: '20h' },
];

export default function NotificationsScreen() {
  const { colorScheme } = useColorScheme() as unknown as { colorScheme: 'light' | 'dark' };
  const themeColors = Colors[colorScheme ?? 'light'];

  const renderItem = ({ item }: { item: typeof notifications[0] }) => (
    <View style={[styles.notificationItem, { 
      borderBottomColor: themeColors.border,
      backgroundColor: themeColors.background 
    }]}>
      <View style={styles.iconContainer}>
        {item.type === 'like' ? (
          <Ionicons name="heart" size={24} color="#e0245e" />
        ) : (
          <Ionicons name="repeat" size={24} color="#17bf63" />
        )}
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, { color: themeColors.text, lineHeight: 24 }]} numberOfLines={2}>
          <Text style={styles.bold}>@{item.user}</Text> {item.text}
        </Text>
        <Text style={[styles.time, { color: themeColors.secondaryText, marginTop: 8 }]}>
          {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <View style={styles.container}>
        <View style={[styles.header, { 
          backgroundColor: themeColors.background,
          borderBottomColor: themeColors.border
        }]}>
          <Text style={[styles.headerText, { color: themeColors.text }]}>
            Notifications
          </Text>
        </View>

        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={{ color: themeColors.text, padding: 16 }}>
              No new notifications
            </Text>
          }
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '800',
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 80,
  },
  iconContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  bold: {
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
  },
  listContent: {
    paddingBottom: 48,
  },
});