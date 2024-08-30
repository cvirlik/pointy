import { Dimensions, Pressable, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '@/components/Themed';
import { Switch } from '@/components/Switch';
import { PageContainer } from '@/components/PageContainer';
import { Avatar } from '@/components/Avatar';
import { OutlineButton } from '@/components/OutlineButton';

export default function Tab() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const width = (Dimensions.get('window').width - 16 * 2 - 16 * 2) / 3;
  const themes = [
    require('../../assets/images/Light.svg'),
    require('../../assets/images/Dark.svg'),
    require('../../assets/images/Monochrome.svg'),
  ];
  const handlePress = (index: number) => {
    setSelectedIndex(index);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };
  return (
    <PageContainer>
      <View style={styles.container}>
        <Avatar size={210} />
        <View>
          <Text style={styles.name}>Pupus Pupus</Text>
          <Pressable
            style={styles.button}
            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}
          >
            {() => <Text style={styles.text}>Account Info</Text>}
          </Pressable>
        </View>
        <View style={styles.rowText}>
          <Text style={styles.goalText}>Current Goal:</Text>
          <Text style={styles.secondaryText}>Flip Flop phone for ✦ 1500</Text>
        </View>
      </View>
      <View style={styles.containerThemes}>
        <Text style={styles.textLabel}>Style Settings</Text>
        <View style={styles.imageContainer}>
          {themes.map((theme, index) => (
            <Pressable
              key={index}
              style={[
                {
                  width,
                  borderRadius: 6,
                  elevation: 5,
                  shadowColor: 'rgba(20, 19, 21, 0.6)',
                  justifyContent: 'center',
                  alignContent: 'center',
                  position: 'relative',
                },
              ]}
              onPress={() => handlePress(index)}
            >
              <Image style={styles.image} source={theme} />
              {index === selectedIndex && (
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={'#72B8EB'}
                  style={{ position: 'absolute', right: 4, bottom: 4 }}
                />
              )}
            </Pressable>
          ))}
        </View>
        <View style={styles.rowText}>
          <Text style={styles.goalText}>Enable vibrations</Text>
          <Switch isSelect={true} onSelect={() => {}}></Switch>
        </View>
      </View>
      <OutlineButton
        text="Log Out"
        color="#D92871"
        colorFill="rgba(217, 40, 114, 0.1)"
        icon={<Ionicons name="log-out-outline" size={24} color="#D92871" />}
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
