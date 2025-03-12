import { useColorScheme } from '../../hooks/useColorScheme';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { mockNotifications } from '../data/notifications';
import { Notification } from '../types'; // Type import

export default function NotificationsScreen() {
  const { colorScheme } = useColorScheme() as unknown as { colorScheme: 'light' | 'dark' };
  const themeColors = Colors[colorScheme ?? 'light'];

  const renderItem = ({ item }: { item: Notification }) => (
    <View style={[styles.notificationItem, { 
      borderBottomColor: themeColors.border,
      backgroundColor: themeColors.background 
    }]}>
      <View style={styles.iconContainer}>
        {getNotificationIcon(item.type)}
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, { color: themeColors.text, lineHeight: 24 }]} numberOfLines={2}>
          <Text style={styles.bold}>{item.handle}</Text> {item.text}
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
          data={mockNotifications}
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

// Helper function for icons
const getNotificationIcon = (type: Notification['type']) => {
  switch(type) {
    case 'like':
      return <Ionicons name="heart" size={24} color="#e0245e" />;
    case 'retweet':
      return <Ionicons name="repeat" size={24} color="#17bf63" />;
    case 'reply':
      return <Ionicons name="chatbubble" size={24} color={Colors.light.tint} />;
    case 'quote':
      return <Ionicons name="swap-horizontal-outline" size={24} color={Colors.light.tint} />;
    case 'follow':
      return <Ionicons name="person-add" size={24} color={Colors.light.tint} />;
    default:
      return <Ionicons name="notifications" size={24} color={Colors.light.tint} />;
  }
};

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