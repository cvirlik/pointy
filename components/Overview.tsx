import { Pressable, StyleSheet, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Text } from '@/components/Themed';

export function OverviewButton() {
  return (
    <Pressable onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}>
      {({ pressed }) => (
        <View
          style={[styles.container, { backgroundColor: pressed ? '#415ea71c' : 'transparent' }]}
        >
          <Text style={styles.text}>Period Overview</Text>
          <Ionicons name="calendar-outline" size={24} color="#415EA7" />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Regular',
    fontSize: 18,
    color: '#415EA7',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 16,
    borderColor: '#415EA7',
  },
});
