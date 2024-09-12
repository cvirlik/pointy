import { StyleSheet } from 'react-native';
import React from 'react';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

import { useVibration } from '@/providers/VibrationProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { TransactionTypeList } from '@/components/TransactionTypeList';
import { TransactionList } from '@/components/TransactionList';
import { Text, View } from '@/components/Themed';
import { Tabs } from '@/components/Tabs';
import { PageHeader } from '@/components/PageHeader';
import { PageContainer } from '@/components/PageContainer';
import { OutlineButton } from '@/components/OutlineButton';
import { ModalWindow } from '@/components/Modal';
import { FAB } from '@/components/FAB';
import { BalanceCard } from '@/components/BalanceCard';

export default function Tab() {
  const [openModal, setOpenModal] = React.useState(false);
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const theme = useTheme().theme;
  const vibration = useVibration();

  const onFABPress = () => {
    setOpenModal(true);
    if (vibration.isVibrationEnabled) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };

  return (
    <>
      <PageContainer>
        <PageHeader title="Hello there!" avatar={true} />
        <BalanceCard />
        <TransactionList />
      </PageContainer>
      <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
        <Text style={styles.title}>Choose Transaction</Text>
        <Tabs options={['Work', 'Shopping', 'Activity', 'Cleaning', 'Poop']} />
        <TransactionTypeList />
        <OutlineButton
          text="Create New Transaction"
          color={theme.primary}
          colorFill={theme.primaryOpacity}
          icon={<Ionicons name="pencil" size={24} color={theme.primary} />}
          fontSize={16}
          onPress={() => {
            setOpenModal(false);
            setOpenCreateModal(true);
          }}
        />
        <OutlineButton
          onPress={() => {
            setOpenModal(false);
          }}
          text="Close"
          color={theme.disabled}
          colorFill={theme.disabledOpacity}
          withoutOutline
          fontSize={16}
        />
      </ModalWindow>
      <ModalWindow openModal={openCreateModal} setOpenModal={setOpenCreateModal}>
        <Text style={styles.title}>Create New Transaction</Text>
        <View style={styles.textWrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Name</Text>
            <Text style={styles.mainText}>Do stuff</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Category</Text>
            <Text style={styles.mainText}>Work</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Approximate Time</Text>
            <Text style={styles.mainText}>1 hr</Text>
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <Text style={styles.mainText}>Calculated price:</Text>
              <Text style={[styles.mainText, { color: theme.secondary }]}>+ 30✦</Text>
            </View>
          </View>
        </View>
        <OutlineButton
          text="Apply"
          color={theme.secondary}
          colorFill={theme.secondaryOpacity}
          icon={<Ionicons name="checkmark" size={24} color={theme.secondary} />}
          fontSize={16}
          onPress={() => {
            setOpenCreateModal(false);
            setOpenModal(true);
          }}
        />
        <OutlineButton
          onPress={() => {
            setOpenCreateModal(false);
            setOpenModal(true);
          }}
          text="Cancel"
          color={theme.disabled}
          colorFill={theme.disabledOpacity}
          withoutOutline
          fontSize={16}
        />
      </ModalWindow>
      <FAB onPress={onFABPress} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SemiBold',
    fontSize: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  mainText: {
    fontSize: 16,
    fontFamily: 'Regular',
  },
  textWrapper: {
    gap: 4,
    marginVertical: 8,
  },
});
