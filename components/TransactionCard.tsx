import { StyleSheet, View } from 'react-native';

import { Text } from './Themed';
import { Card } from './Card';

export function TransactionCard() {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.mainText}>- 15 ✦</Text>
        </View>
        <View>
          <Text style={styles.mainText}>Bought energy drink</Text>
          <Text style={styles.description}>Drink in modiration</Text>
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
  description: {
    fontSize: 16,
    fontFamily: 'Light',
  },
});
