import { Dimensions, Pressable, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

import { useVibration } from '@/providers/VibrationProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { darkTheme, lightTheme, monochromeTheme } from '@/constants/Themes';
import type { Theme } from '@/constants/Themes';
import { Text, View } from '@/components/Themed';
import { Switch } from '@/components/Switch';
import { PageContainer } from '@/components/PageContainer';
import { OutlineButton } from '@/components/OutlineButton';
import { Avatar } from '@/components/Avatar';

export default function Tab() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const curentTheme = useTheme().theme;
  const setTheme = useTheme().setTheme;
  const vibration = useVibration();
  const width = (Dimensions.get('window').width - 16 * 2 - 16 * 2) / 3;
  const themes = [
    {
      theme: lightTheme,
      image: require('../../assets/images/Light.svg'),
    },
    {
      theme: darkTheme,
      image: require('../../assets/images/Dark.svg'),
    },
    {
      theme: monochromeTheme,
      image: require('../../assets/images/Monochrome.svg'),
    },
  ];
  const handlePress = (index: number, theme: Theme) => {
    setSelectedIndex(index);
    setTheme(theme);
    if (vibration.isVibrationEnabled) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };
  return (
    <PageContainer>
      <View style={styles.container}>
        <Avatar size={210} />
        <View>
          <Text style={styles.name}>Pupus Pupus</Text>
          <OutlineButton
            text="Account Info"
            color="white"
            colorFill="black"
            withoutOutline
            filled
          />
        </View>
        <View style={styles.rowText}>
          <Text style={styles.goalText}>Current Goal:</Text>
          <Text style={styles.secondaryText}>Flip Flop phone for ✦ 1500</Text>
        </View>
      </View>
      <View style={styles.containerThemes}>
        <Text style={styles.textLabel}>Style Settings</Text>
        <View style={styles.imageContainer}>
          {themes.map(({ theme, image }, index) => (
            <Pressable
              key={index}
              style={[
                {
                  width,
                  borderRadius: 6,
                  elevation: 5,
                  shadowColor: curentTheme.shadow,
                  justifyContent: 'center',
                  alignContent: 'center',
                  position: 'relative',
                },
              ]}
              onPress={() => handlePress(index, theme)}
            >
              <Image style={styles.image} source={image} />
              {index === selectedIndex && (
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={curentTheme.tertiary}
                  style={{ position: 'absolute', right: 4, bottom: 4 }}
                />
              )}
            </Pressable>
          ))}
        </View>
        <View style={styles.rowText}>
          <Text style={styles.goalText}>Enable vibrations</Text>
          <Switch
            isSelect={vibration.isVibrationEnabled}
            onSelect={vibration.setVibration}
          ></Switch>
        </View>
      </View>
      <OutlineButton
        text="Log Out"
        color={curentTheme.secondary}
        colorFill={curentTheme.secondaryOpacity}
        icon={<Ionicons name="log-out-outline" size={24} color={curentTheme.secondary} />}
      />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: '470 / 275',
  },
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    overflow: 'visible',
  },
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    marginTop: StatusBar.currentHeight,
    paddingTop: 32,
    gap: 16,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'SemiBold',
    fontSize: 32,
  },
  text: {
    fontFamily: 'Regular',
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 2,
    borderRadius: 16,
  },
  rowText: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  secondaryText: {
    fontFamily: 'Regular',
    fontSize: 18,
    textAlign: 'right',
  },
  goalText: {
    fontFamily: 'Regular',
    fontSize: 18,
  },
  textLabel: {
    fontFamily: 'SemiBold',
    fontSize: 24,
  },
  containerThemes: {
    width: '100%',
    gap: 8,
  },
});
