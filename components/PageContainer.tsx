import { ScrollView, StyleSheet, View } from 'react-native';

import type { ViewProps } from './Themed';

export function PageContainer(props: ViewProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {props.children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
    gap: 16,
  },
});
