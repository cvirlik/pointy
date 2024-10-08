import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import { View } from './Themed';

import { useTheme } from '@/providers/ThemeProvider';

interface TabsProps {
  options: string[];
  onSelect?: (selectedOption: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ options, onSelect }) => {
  const theme = useTheme().theme;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [optionWidths, setOptionWidths] = React.useState<Record<string, number>>({});

  const handlePress = React.useCallback(
    (index: number) => {
      setSelectedIndex(index);
      if (onSelect) {
        onSelect(options[index]);
      }
    },
    [onSelect, options],
  );

  const currentWidth = React.useMemo(
    () => optionWidths[selectedIndex],
    [optionWidths, selectedIndex],
  );

  const scrollWidth = React.useMemo(() => {
    let sum = 0;
    for (let i = 0; i < selectedIndex; ++i) {
      sum += optionWidths[i] ?? 0;
    }
    return sum;
  }, [optionWidths, selectedIndex]);

  const rStyle = useAnimatedStyle(() => ({ left: withTiming(scrollWidth) }), [scrollWidth]);

  return (
    <View type="foreground" style={[styles.container, { shadowColor: theme.shadow }]}>
      <ScrollView
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        <Animated.View
          style={[
            { width: currentWidth, backgroundColor: theme.tertiary },
            styles.selected,
            rStyle,
          ]}
        />
        {options.map((option, index) => (
          <TouchableOpacity
            onLayout={event => {
              const width = event.nativeEvent.layout.width;
              setOptionWidths(current => ({
                ...current,
                [index.toString()]: width,
              }));
            }}
            key={index}
            style={[styles.button]}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    elevation: 5,
    overflow: 'hidden',
    width: '104%',
  },
  scroll: { overflow: 'hidden', width: '100%' },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  selected: {
    borderRadius: 16,
    position: 'absolute',
    elevation: 5,
    height: '100%',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Medium',
    lineHeight: 32,
  },
});
