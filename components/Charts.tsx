import { BarChart } from 'react-native-gifted-charts';
import type { barDataItem } from 'react-native-gifted-charts';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Card } from './Card';

export const WeekGraph = () => {
  const barData = [
    { value: 250, label: 'M' },
    { value: 500, label: 'T' },
    { value: 745, label: 'W' },
    { value: 320, label: 'T' },
    { value: 600, label: 'F' },
    { value: 256, label: 'S' },
    { value: 300, label: 'S' },
  ];

  const [selectedBarIndex, setSelectedBarIndex] = React.useState<number | null>(null);

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: 'Regular' }}>Total for this week:</Text>
          <Text style={{ fontSize: 28, fontFamily: 'Medium' }}>
            + {barData.reduce((total, item) => total + item.value, 0)} ✦
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}
        >
          <BarChart
            data={barData.map((item, index) => ({
              ...item,
              frontColor: index === selectedBarIndex ? '#415EA7' : '#D92871',
              topLabelComponent: () => (
                <Text
                  style={{
                    color: '#000000',
                    fontFamily: 'Light',
                    fontSize: 16,
                    lineHeight: 24,
                    marginBottom: 2,
                    width: '200%',
                    textAlign: 'center',
                  }}
                >
                  {item.value}
                </Text>
              ),
            }))}
            barWidth={18}
            initialSpacing={10}
            spacing={20}
            endSpacing={5}
            barBorderRadius={3}
            adjustToWidth
            yAxisThickness={0}
            xAxisThickness={0}
            hideRules
            hideYAxisText
            yAxisExtraHeight={16}
            xAxisLabelsHeight={22}
            xAxisLabelsVerticalShift={0}
            xAxisLabelTextStyle={{ color: '#000000', fontFamily: 'Regular', fontSize: 16 }}
            yAxisTextStyle={{ color: '#000000', fontFamily: 'Light' }}
            isAnimated
            animationDuration={300}
            onPress={(_barDataItem: barDataItem, index: number) => {
              setSelectedBarIndex(index);
            }}
            leftShiftForLastIndexTooltip={0}
          />
        </View>
      </View>
      <Card style={styles.cardContainer}>
        <View style={styles.container}>
          <Text style={styles.mainText}>Thu 18 May</Text>
          <View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>Income:</Text>
              <Text style={styles.income}>+ 150 ✦</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>Expenses:</Text>
              <Text style={styles.expenses}> - 150 ✦</Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    padding: 16,
  },
  container: {
    gap: 8,
  },
  descriptionContainer: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontFamily: 'Medium',
  },
  description: {
    fontSize: 18,
    fontFamily: 'Regular',
  },
  income: {
    fontSize: 24,
    fontFamily: 'Medium',
    color: '#D92871',
  },
  expenses: {
    fontSize: 24,
    fontFamily: 'Medium',
    color: '#415EA7',
  },
});
