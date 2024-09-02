import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import * as Haptics from 'expo-haptics';

interface SwitchProps {
  isSelect: boolean;
  onSelect?: (selectedOption: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ isSelect, onSelect }) => {
  const [enabled, setEnabled] = React.useState(isSelect);

  const handlePress = () => {
    setEnabled(current => {
      if (!current) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
      return !current;
    });
    onSelect?.(enabled);
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      enabled ? 1 : 0, // interpolating value
      [0, 1], // input range
      ['#c7c7c7', '#72B8EB'], // output colors
    );

    return {
      backgroundColor: withTiming(backgroundColor, { duration: 150 }),
    };
  }, [enabled]);

  const rStyle = useAnimatedStyle(
    () => ({
      left: withTiming(enabled ? 27 : 3, {
        duration: 150,
        easing: Easing.linear,
      }),
    }),
    [enabled],
  );

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.container, animatedContainerStyle]}>
        <Animated.View style={[styles.selected, rStyle]} />
        <View style={styles.button} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    width: 48,
    height: 24,
  },
  button: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 60,
  },
  selected: {
    backgroundColor: '#fff',
    borderRadius: 32,
    position: 'absolute',
    elevation: 3,
    height: 18,
    width: 18,
  },
});
