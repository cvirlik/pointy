import { Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useTheme } from '@/providers/ThemeProvider';
import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Text, View } from '@/components/Themed';

export const TabBar = ({ descriptors, navigation }: BottomTabBarProps) => {
  const { width } = Dimensions.get('window');

  return (
    <View
      type="foreground"
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 11,
        padding: 6,
        borderRadius: 16,
      }}
    >
      {Object.entries(descriptors).map(([_, descriptor]) => {
        const { title, tabBarTestID, tabBarAccessibilityLabel, tabBarIcon } = descriptor.options;
        const { key: routeKey } = descriptor.route;
        const { isFocused } = descriptor.navigation;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: routeKey,
            canPreventDefault: true,
          });

          if (!isFocused() && !event.defaultPrevented) {
            navigation.navigate({ key: routeKey });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: routeKey,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused() ? { selected: true } : {}}
            accessibilityLabel={tabBarAccessibilityLabel}
            testID={tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={routeKey}
            style={{
              width: width / 3,
              alignItems: 'center',
            }}
          >
            {tabBarIcon?.({
              focused: isFocused(),
              color: isFocused() ? Colors.light.tint : Colors.light.tabIconDefault,
              size: 24,
            })}
            <Text style={{ color: isFocused() ? Colors.light.tint : Colors.light.tabIconDefault }}>
              {title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function TabLayout() {
  const theme = useTheme().theme;

  return (
    <Tabs
      tabBar={TabBar}
      screenOptions={{
        tabBarActiveTintColor: theme.secondary,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Card',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="card" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="happy" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
