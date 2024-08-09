import { StyleSheet, View } from 'react-native';

import { TransactionCard } from './TransactionCard';
import { Text } from './Themed';

const testList = [
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
    description: 'Drink in moderation',
  },
  {
    price: 15,
    positive: true,
    title: 'Work 1 hr',
    description: 'Pupipu',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
    description: 'Drink in moderation',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
    description: 'Drink in moderation',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
    description: 'Drink in moderation',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
    description: 'Drink in moderation',
  },
];

export function TransactionList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaction History</Text>
      {testList.map((item, index) => (
        <TransactionCard
          key={index}
          price={item.price}
          positive={item.positive}
          title={item.title}
          description={item.description}
        />
      ))}
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
    gap: 8,
  },
});
