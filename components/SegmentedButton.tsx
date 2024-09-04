import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';

import { View } from './Themed';

import { useTheme } from '@/providers/ThemeProvider';

interface SegmentedButtonProps {
  options: string[];
  onSelect?: (selectedOption: string) => void;
  pagePadding: number;
}

export const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  options,
  onSelect,
  pagePadding,
}) => {
  const theme = useTheme().theme;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { width: windowWidth } = useWindowDimensions();
  const buttonWidth = (windowWidth - pagePadding) / options.length;

  const handlePress = (index: number) => {
    setSelectedIndex(index);
    if (onSelect) {
      onSelect(options[index]);
    }
  };

  const rStyle = useAnimatedStyle(
    () => ({ left: withTiming(buttonWidth * selectedIndex) }),
    [selectedIndex],
  );

  return (
    <View type="foreground" style={[styles.container, { shadowColor: theme.shadow }]}>
      <Animated.View
        style={[
          {
            width: buttonWidth,
            backgroundColor: theme.tertiary,
          },
          styles.selected,
          rStyle,
        ]}
      />
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[{ width: buttonWidth }, styles.button]}
          onPress={() => handlePress(index)}
        >
          <Text
            style={[
              styles.text,
              { color: index === selectedIndex ? theme.selectedText : theme.text },
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
  },
  button: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  selected: {
    borderRadius: 16,
    position: 'absolute',
    elevation: 3,
    height: '100%',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Medium',
    lineHeight: 32,
  },
});
