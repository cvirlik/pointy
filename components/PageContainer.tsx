import { ScrollView, StyleSheet, View } from 'react-native';

import type { ViewProps } from './Themed';

export function PageContainer(props: ViewProps) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>{props.children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 81,
    alignItems: 'center',
    gap: 16,
  },
});
