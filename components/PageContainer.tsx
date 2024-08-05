import { ScrollView, StyleSheet, View } from 'react-native';

import { Lava } from './Lava';

type PageProps = React.ComponentProps<typeof View> & {
  children?: React.ReactNode;
};

export function PageContainer(props: PageProps) {
  return (
    <View style={styles.container}>
      <Lava style={styles.lava} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>{props.children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: 'white',
  //     paddingHorizontal: 16,
  //     paddingBottom: 81,
  //     alignItems: 'center',
  //     gap: 32,
  //   },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 81,
    paddingBottom: 81,
    alignItems: 'center',
    gap: 32,
  },
  lava: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
