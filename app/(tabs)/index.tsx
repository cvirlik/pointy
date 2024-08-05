import { Pressable, StyleSheet, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Entypo } from '@expo/vector-icons';

import { TransactionList } from '@/components/TransactionList';
import { PageHeader } from '@/components/PageHeader';
import { PageContainer } from '@/components/PageContainer';
import { BalanceCard } from '@/components/BalanceCard';

export default function Tab() {
  return (
    <>
      <PageContainer>
        <PageHeader title="Hello there!" avatar={true} />
        <BalanceCard />
        <TransactionList></TransactionList>
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
    bottom: 81,
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
