import { StyleSheet } from 'react-native';

import { View } from './Themed';

import { useTheme } from '@/providers/ThemeProvider';

type AvatarProps = {
  size: number;
};

export function Avatar(props: AvatarProps) {
  const theme = useTheme().theme;
  return (
    <View
      style={[
        styles.image,
        { width: props.size, height: props.size, backgroundColor: theme.primary },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 1000,
  },
});
