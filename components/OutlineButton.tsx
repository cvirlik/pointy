import { Pressable, StyleSheet, View } from 'react-native';
import * as Haptics from 'expo-haptics';

import { Text } from '@/components/Themed';

type OutlineButtonProps = {
  text: string;
  color: string;
  colorFill: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  withoutOutline?: boolean;
  fontSize?: number;
  filled?: boolean;
};

export function OutlineButton(props: OutlineButtonProps) {
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        props.onPress?.();
      }}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: props.filled
                ? props.colorFill
                : pressed
                  ? props.colorFill
                  : 'transparent',
              borderColor: props.color,
              borderWidth: props.withoutOutline ? 0 : 1,
            },
          ]}
        >
          <Text style={[styles.text, { color: props.color, fontSize: props.fontSize || 18 }]}>
            {props.text}
          </Text>
          {props.icon}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Regular',
    fontSize: 18,
    lineHeight: 32,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,

    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 16,
  },
});
