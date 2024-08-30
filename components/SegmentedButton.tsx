import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';

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
    <View style={styles.container}>
      <Animated.View style={[{ width: buttonWidth }, styles.selected, rStyle]} />
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[{ width: buttonWidth }, styles.button]}
          onPress={() => handlePress(index)}
        >
          <Text style={[styles.text, index === selectedIndex ? styles.selectedText : null]}>
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
    backgroundColor: '#fff',
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
    backgroundColor: '#72B8EB',
    borderRadius: 16,
    position: 'absolute',
    elevation: 3,
    height: '100%',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Medium',
  },
  selectedText: {
    color: 'white',
    fontSize: 18,
  },
});
