import { ScrollView, StyleSheet } from 'react-native';
import type { View } from 'react-native';

type PageProps = React.ComponentProps<typeof View> & {
  children?: React.ReactNode;
};

export function PageContainer(props: PageProps) {
  return <ScrollView contentContainerStyle={styles.container}>{props.children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    alignItems: 'center',
    gap: 32,
  },
});
