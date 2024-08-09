import { ScrollView, StyleSheet, View } from 'react-native';

import { Lava } from './Lava';

type PageProps = React.ComponentProps<typeof View> & {
  children?: React.ReactNode;
};

export function PageContainer(props: PageProps) {
  return (
    <View style={styles.container}>
      <Lava />
      <ScrollView contentContainerStyle={styles.scrollContainer}>{props.children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 81,
    alignItems: 'center',
    gap: 16,
  },
});
