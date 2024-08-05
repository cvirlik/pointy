import { StyleSheet, View } from 'react-native';

export function Avatar() {
  return <View style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 42,
    height: 42,
    backgroundColor: '#415EA7',
    borderRadius: 100,
  },
});
