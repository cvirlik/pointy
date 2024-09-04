import { StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '@/providers/ThemeProvider';
import { TransactionType } from '@/components/TransactionTypeList';
import { Text, View } from '@/components/Themed';
import { SegmentedButton } from '@/components/SegmentedButton';
import { PageHeader } from '@/components/PageHeader';
import { PageContainer } from '@/components/PageContainer';
import { OutlineButton } from '@/components/OutlineButton';
import { ModalWindow } from '@/components/Modal';
import { WeekGraph } from '@/components/Charts';

const testList = [
  {
    price: 1500,
    positive: false,
    title: 'Shop 1',
  },
  {
    price: 239,
    positive: false,
    title: 'Shop 2',
  },
  {
    price: 200,
    positive: false,
    title: 'Shop 3',
  },
  {
    price: 150,
    positive: false,
    title: 'Shop 4',
  },
  {
    price: 90,
    positive: false,
    title: 'Shop 5',
  },
];

export default function Tab() {
  const [openModal, setOpenModal] = React.useState(false);
  const theme = useTheme().theme;
  return (
    <>
      <PageContainer>
        <PageHeader title="Stats Analytics " avatar={false} />
        <SegmentedButton
          pagePadding={16 * 2}
          options={['Week', 'Month', 'Year']}
          onSelect={() => {}}
        />
        <WeekGraph />
        <OutlineButton
          text="Period Overview"
          color={theme.primary}
          colorFill={theme.primaryOpacity}
          icon={<Ionicons name="calendar-outline" size={24} color={theme.primary} />}
          onPress={() => {
            setOpenModal(true);
          }}
        />
      </PageContainer>
      <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
        <View style={[styles.content, { backgroundColor: theme.modal }]}>
          <View type="foreground" style={styles.card}>
            <Text style={styles.title}>Overview</Text>
            <SegmentedButton pagePadding={32 * 3 + 16 * 2} options={['Income', 'Expenses']} />
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
            <OutlineButton
              onPress={() => {
                setOpenModal(false);
              }}
              text="Cancel"
              color={theme.disabled}
              colorFill={theme.disabledOpacity}
              withoutOutline
              fontSize={16}
            />
          </View>
        </View>
      </ModalWindow>
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
    borderRadius: 32,
    gap: 10,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
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
  container: {
    width: '100%',
    gap: 8,
    marginVertical: 8,
  },
});
