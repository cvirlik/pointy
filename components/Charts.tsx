import { BarChart } from 'react-native-gifted-charts';
import type { barDataItem } from 'react-native-gifted-charts';
import { StyleSheet } from 'react-native';
import React from 'react';

import { Text, View } from './Themed';
import { Card } from './Card';

import { useTheme } from '@/providers/ThemeProvider';

export const WeekGraph = () => {
  const theme = useTheme().theme;
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
              frontColor: index === selectedBarIndex ? theme.primary : theme.secondary,
              topLabelComponent: () => (
                <Text
                  style={{
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
            xAxisLabelTextStyle={{ color: theme.text, fontFamily: 'Regular', fontSize: 16 }}
            yAxisTextStyle={{ color: theme.text, fontFamily: 'Light' }}
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
              <Text style={[{ color: theme.secondary }, styles.numbers]}>+ 150 ✦</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>Expenses:</Text>
              <Text style={[{ color: theme.primary }, styles.numbers]}> - 150 ✦</Text>
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
  numbers: {
    fontSize: 24,
    fontFamily: 'Medium',
  },
});
