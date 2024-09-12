import { StyleSheet } from 'react-native';

import { View } from './Themed';

import { useTheme } from '@/providers/ThemeProvider';

type CardProps = React.ComponentProps<typeof View> & {
  children?: React.ReactNode;
};

export function Card(props: CardProps) {
  const theme = useTheme().theme;
  return (
    <View
      type="foreground"
      {...props}
      style={[styles.card, props.style, { shadowColor: theme.shadow }]}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 5,
    padding: 16,
  },
});
