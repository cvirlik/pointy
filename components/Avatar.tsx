import { StyleSheet, View } from 'react-native';

type AvatarProps = {
  size: number;
};

export function Avatar(props: AvatarProps) {
  return <View style={[styles.image, { width: props.size, height: props.size }]} />;
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#415EA7',
    borderRadius: 100,
  },
});
