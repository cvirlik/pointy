import { Pressable, StyleSheet, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Entypo } from '@expo/vector-icons';

import { TransactionCard } from '@/components/TransactionCard';
import { PageContainer } from '@/components/PageContainer';
import { BalanceCard } from '@/components/BalanceCard';

export default function Tab() {
  return (
    <>
      <PageContainer>
        <BalanceCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </PageContainer>
      <View style={{ position: 'relative' }}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : styles.buttonDefault,
          ]}
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}
        >
          <Entypo name="plus" size={24} color="black" />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 100,
    padding: 16,
  },
  buttonDefault: {
    backgroundColor: '#FFC9E0',
  },
  buttonPressed: {
    backgroundColor: '#ea92b9',
  },
});
