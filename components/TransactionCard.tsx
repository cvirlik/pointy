import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';
import { Card } from './Card';

import { useTheme } from '@/providers/ThemeProvider';

type TransactionCardProps = {
  price: number;
  positive: boolean;
  title: string;
  description: string;
};

export function TransactionCard(props: TransactionCardProps) {
  const theme = useTheme().theme;
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <View>
          <Text
            style={[styles.mainText, { color: props.positive ? theme.secondary : theme.primary }]}
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
