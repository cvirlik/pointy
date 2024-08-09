import { StyleSheet, View } from 'react-native';

type CardProps = React.ComponentProps<typeof View> & {
  children?: React.ReactNode;
};

export function Card(props: CardProps) {
  return (
    <View {...props} style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    shadowColor: 'rgba(20, 19, 21, 0.6)',
    elevation: 5,
  },
});
