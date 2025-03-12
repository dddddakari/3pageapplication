import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface FabProps {
  onPress: () => void;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  position?: {
    bottom?: number;
    right?: number;
  };
  tabBarHeight?: number;
}

const Fab: React.FC<FabProps> = ({
  onPress,
  icon = 'add',
  iconSize = 35,
  iconColor = 'white',
  position = { bottom: 24, right: 24 },
  tabBarHeight = 60
}) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.fab,
        {
          bottom: (position.bottom || 24) + tabBarHeight + insets.bottom,
          right: position.right || 24
        }
      ]}
    >
      <Ionicons name={icon as any} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: '#1DA1F2',
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Fab;