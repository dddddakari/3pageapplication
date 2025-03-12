import { useThemeColor } from '../../hooks/useThemeColor';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Home Feed</Text>
      {/* Add your tweet list here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});