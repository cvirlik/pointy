import { StatusBar, StyleSheet, View } from 'react-native';

import { Text } from './Themed';
import { Avatar } from './Avatar';

type PageHeaderProps = {
  title: string;
  avatar: boolean;
};

export function PageHeader(props: PageHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.avatar ? <Avatar size={42} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SemiBold',
    fontSize: 24,
  },
  container: {
    width: '100%',
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
