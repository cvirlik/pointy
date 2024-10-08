import { Circle, Defs, RadialGradient, Stop, Svg } from 'react-native-svg';
import { Pressable, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { View } from './Themed';

import { useTheme } from '@/providers/ThemeProvider';

type FABProps = {
  onPress: () => void;
};

export function FAB(props: FABProps) {
  const theme = useTheme().theme;
  return (
    <View style={{ position: 'relative' }}>
      <Pressable style={styles.button} onPress={props.onPress}>
        {({ pressed }) => (
          <View>
            <Svg width={(pressed ? 128 : 64) + 18} height={(pressed ? 128 : 64) + 18}>
              <Defs>
                <RadialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <Stop offset="50%" stopColor={theme.effectFrom} />
                  <Stop offset="100%" stopColor={theme.effectTo} stopOpacity="0" />
                </RadialGradient>
              </Defs>
              <Circle
                cx={(pressed ? 96 : 32) + 4}
                cy={(pressed ? 96 : 32) + 4}
                r={pressed ? '42' : '36'}
                fill="url(#grad)"
              />
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
    bottom: 0,
    right: 0,
  },
  icon: {
    position: 'absolute',
    bottom: 33,
    right: 33,
  },
});
