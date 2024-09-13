import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';
import { RadialGradientEffect } from './RadialGradientEffect';
import { MasterCat } from './MasterCat';
import { Card } from './Card';

import { useProfile } from '@/providers/ProfileProvider';

export function BalanceCard() {
  const profile = useProfile();
  return (
    <Card style={styles.cardContainer}>
      <RadialGradientEffect fx="100" fy="75" />
      <View style={styles.imageContainer}>
        <MasterCat />
      </View>
      <View>
        <Text style={styles.mainText}>your current balance</Text>
        <Text style={styles.balanceText}>✦ 150</Text>
        <Text style={styles.mainText}>
          {profile.profile?.cardNumber.toString().replace(/(\d{4})(?=\d)/g, '$1  ')}
        </Text>
      </View>
      <Text style={styles.description}>your actual goal is 1500 ✦</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    aspectRatio: '85.60 / 53.98',
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
