import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useMemo } from 'react';

import { View } from './Themed';

import { useTheme } from '@/providers/ThemeProvider';

export type CircleProps = {
  color: string;
  x: number;
  y: number;
  radius: number;
};

export const Circle: React.FC<CircleProps> = ({ color, radius, x, y }) => {
  const randRotation = Math.random() * 360;

  const rotation = useDerivedValue(() => {
    return withRepeat(
      withSequence(
        withTiming(randRotation, { duration: 0 }),
        withTiming(randRotation + 360, { duration: 10_000, easing: Easing.linear }),
      ),
      -1,
      false,
    );
  }, []);

  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles,
        {
          transformOrigin: ['50%', y + radius, 0],
        },
      ]}
    >
      <View
        style={[
          {
            backgroundColor: color,
            width: radius * 2,
            height: radius * 2,
            position: 'absolute',
            left: x - radius,
            top: y - radius,
            borderRadius: radius,
            opacity: 0.6,
          },
        ]}
      />
    </Animated.View>
  );
};

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const RandomCircles: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const theme = useTheme().theme;

  const circles = useMemo(() => {
    const rand = randomNumber(4, 6) / 10;
    const radius = (width * rand) / 2;
    return Array.from({ length: 10 }, (_, index) => ({
      index,
      x: randomNumber(0, width),
      y: randomNumber(0, height),
      radius,
      color: theme.backgroundEffect,
    }));
  }, [height, theme.backgroundEffect, width]);

  return (
    <>
      {circles.map((circle: any) => (
        <Circle
          key={circle.index}
          color={circle.color}
          radius={circle.radius}
          x={circle.x}
          y={circle.y}
        />
      ))}
    </>
  );
};
