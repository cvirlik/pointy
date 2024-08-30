import { StyleSheet, View } from 'react-native';
import { Text } from './Themed';

const testList = [
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
  },
  {
    price: 15,
    positive: true,
    title: 'Work 1 hr',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
  },
  {
    price: 15,
    positive: false,
    title: 'Bought energy drink',
  },
];

type TransactionTypeProps = {
  price: number;
  positive: boolean;
  title: string;
  last?: true;
};

export function TransactionType(props: TransactionTypeProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.mainText}>{props.title}</Text>
        </View>
        <View>
          <Text
            style={[styles.mainText, props.positive ? styles.pricePositive : styles.priceNegative]}
          >
            {props.positive ? '+' : '-'} {props.price} ✦
          </Text>
        </View>
      </View>
      {props.last && <View style={styles.separator} />}
    </View>
  );
}

export function TransactionTypeList() {
  return (
    <View style={styles.container}>
      {testList.map((item, index) =>
        index !== testList.length - 1 ? (
          <TransactionType
            key={index}
            price={item.price}
            positive={item.positive}
            title={item.title}
            last
          />
        ) : (
          <TransactionType
            key={index}
            price={item.price}
            positive={item.positive}
            title={item.title}
          />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
    marginVertical: 8,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: 16,
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
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(87, 87, 87, 0.633)',
  },
  wrapper: {
    gap: 8,
  },
});
