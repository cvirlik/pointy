import { Svg, Defs, Stop, Rect, RadialGradient } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

import { Text } from './Themed';
import { Card } from './Card';

export function BalanceCard() {
  return (
    <Card style={styles.cardContainer}>
      <Svg style={StyleSheet.absoluteFillObject}>
        <Defs>
          <RadialGradient id="grad" fx="100" fy="75" gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor="#FFC9E0" stopOpacity="1" />
            <Stop offset="1" stopColor="#ffffff" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" rx={16} />
      </Svg>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/mastercat.svg')} />
      </View>
      <View>
        <Text style={styles.mainText}>your current balance</Text>
        <Text style={styles.balanceText}>✦ 150</Text>
        <Text style={styles.mainText}>0000 **** **** 0000</Text>
      </View>
      <Text style={styles.description}>your actual goal is 1500 ✦</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    aspectRatio: '85.60 / 53.98',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  imageContainer: {
    top: 32,
    right: 16,
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
  },
  image: {
    width: 51,
    height: 33,
  },
  mainText: {
    fontFamily: 'Light',
  },
  balanceText: {
    fontSize: 48,
    height: 48,
    lineHeight: 70,
    fontFamily: 'Regular',
  },
  description: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    fontSize: 18,
    fontFamily: 'Light',
  },
});
