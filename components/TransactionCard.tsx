import { StyleSheet, View } from 'react-native';

import { Text } from './Themed';
import { Card } from './Card';

type TransactionCardProps = {
  price: number;
  positive: boolean;
  title: string;
  description: string;
};

export function TransactionCard(props: TransactionCardProps) {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <View>
          <Text
            style={[styles.mainText, props.positive ? styles.pricePositive : styles.priceNegative]}
          >
            {props.positive ? '+' : '-'} {props.price} ✦
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    padding: 16,
  },
  container: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontFamily: 'Regular',
  },
  pricePositive: {
    color: '#D92871',
  },
  priceNegative: {
    color: '#415EA7',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Light',
  },
});
