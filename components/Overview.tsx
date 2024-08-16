import { Defs, RadialGradient, Rect, Stop, Svg } from 'react-native-svg';
import { Pressable, StyleSheet, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Text } from '@/components/Themed';

export function OverviewButton() {
  return (
    <Pressable onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}>
      {({ pressed }) => (
        <View>
          <Svg style={StyleSheet.absoluteFillObject}>
            <Defs>
              <RadialGradient id="grad" fx="100" fy="75" gradientUnits="userSpaceOnUse">
                <Stop offset="0.3" stopColor="#415EA7" stopOpacity={pressed ? '0.2' : '0'} />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </RadialGradient>
            </Defs>
            <Rect width="100%" height="100%" fill="url(#grad)" rx={16} />
          </Svg>
          <View style={styles.container}>
            <Text style={styles.text}>Period Overview</Text>
            <Ionicons name="calendar-outline" size={24} color="#415EA7" />
          </View>
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
