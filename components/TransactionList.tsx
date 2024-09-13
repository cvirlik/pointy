import { StyleSheet } from 'react-native';
import React from 'react';

import { TransactionCard } from './TransactionCard';
import { Text, View } from './Themed';

import { formatDate } from '@/services/formats';
import { useProfile } from '@/providers/ProfileProvider';

export function TransactionList() {
  const { transactions } = useProfile();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaction History</Text>
      {transactions?.map((item, index) => (
        <React.Fragment key={`group-${index}`}>
          <Text style={styles.textDate}>{formatDate(new Date(item.date))}</Text>
          {item.transactions.map((transaction, elementIndex) => (
            <TransactionCard
              key={`item-${elementIndex}`}
              price={transaction.price}
              positive={transaction.price >= 0}
              title={transaction.title}
              description={transaction.description}
            />
          ))}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SemiBold',
    fontSize: 24,
  },
  textDate: {
    fontFamily: 'Regular',
    fontSize: 20,
  },
  container: {
    width: '100%',
    gap: 8,
  },
});
