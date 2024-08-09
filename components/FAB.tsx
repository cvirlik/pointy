import { Pressable, StyleSheet, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Entypo } from '@expo/vector-icons';
import { Circle, Defs, RadialGradient, Stop, Svg } from 'react-native-svg';

export function FAB() {
  return (
    <View style={{ position: 'relative' }}>
      <Pressable
        style={styles.button}
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}
      >
        {({ pressed }) => (
          <View>
            <Svg width={64} height={64}>
              <Defs>
                <RadialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <Stop offset="60%" stopColor="#FFC9E0" />
                  <Stop offset="100%" stopColor="#f6bad5" stopOpacity={pressed ? '0.7' : '0'} />
                </RadialGradient>
              </Defs>
              <Circle cx="32" cy="32" r="32" fill="url(#grad)" />
            </Svg>
            <Entypo name="plus" size={24} color="black" style={styles.icon} />
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 81,
    right: 16,
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
