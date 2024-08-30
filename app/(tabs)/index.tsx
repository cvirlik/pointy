import React from 'react';
import * as Haptics from 'expo-haptics';

import { TransactionList } from '@/components/TransactionList';
import { PageHeader } from '@/components/PageHeader';
import { PageContainer } from '@/components/PageContainer';
import { ModalWindow } from '@/components/Modal';
import { FAB } from '@/components/FAB';
import { BalanceCard } from '@/components/BalanceCard';
import { StyleSheet, View, ViewBase } from 'react-native';
import { Text } from '@/components/Themed';
import { Tabs } from '@/components/Tabs';
import { TransactionTypeList } from '@/components/TransactionTypeList';
import { OutlineButton } from '@/components/OutlineButton';
import { Ionicons } from '@expo/vector-icons';

export default function Tab() {
  const [openModal, setOpenModal] = React.useState(false);
  const [openCreateModal, setOpenCreateModal] = React.useState(false);

  const onFABPress = () => {
    setOpenModal(true);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };

  return (
    <>
      <PageContainer>
        <PageHeader title="Hello there!" avatar={true} />
        <BalanceCard />
        <TransactionList />
      </PageContainer>
      <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Choose Transaction</Text>
            <Tabs options={['Work', 'Shopping', 'Activity', 'Cleaning', 'Poop']} />
            <TransactionTypeList />
            <OutlineButton
              text="Create New Transaction"
              color="#415EA7"
              colorFill="rgba(65, 94, 167, 0.1)"
              icon={<Ionicons name="pencil" size={24} color="#415EA7" />}
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
              color="#ccc"
              colorFill="rgba(204, 204, 204, 0.1)"
              withoutOutline
              fontSize={16}
            />
          </View>
        </View>
      </ModalWindow>
      <ModalWindow openModal={openCreateModal} setOpenModal={setOpenCreateModal}>
        <View style={styles.content}>
          <View style={styles.card}>
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
                  <Text style={[styles.mainText, styles.pricePositive]}>+ 30✦</Text>
                </View>
              </View>
            </View>
            <OutlineButton
              text="Apply"
              color="#D92871"
              colorFill="rgba(217, 40, 114, 0.1)"
              icon={<Ionicons name="checkmark" size={24} color="#D92871" />}
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
              color="#ccc"
              colorFill="rgba(204, 204, 204, 0.1)"
              withoutOutline
              fontSize={16}
            />
          </View>
        </View>
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
  card: {
    width: '100%',
    padding: 32,
    backgroundColor: 'white',
    borderRadius: 32,
    gap: 10,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: 'rgba(65, 94, 167, 0.48)',
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
  pricePositive: {
    color: '#D92871',
  },
  priceNegative: {
    color: '#415EA7',
  },
});
