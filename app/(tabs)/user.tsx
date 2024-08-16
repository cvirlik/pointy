import { Defs, RadialGradient, Rect, Stop, Svg } from 'react-native-svg';
import { Avatar } from '@/components/Avatar';
import { PageContainer } from '@/components/PageContainer';
import { Text } from '@/components/Themed';
import { Pressable, StatusBar, StyleSheet, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

export default function Tab() {
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
            {({ pressed }) => <Text style={styles.text}>Account Info</Text>}
          </Pressable>
        </View>
        <View style={styles.goal}>
          <Text style={styles.goalText}>Current Goal:</Text>
          <Text style={styles.secondaryText}>Flip Flop phone for ✦ 1500</Text>
        </View>
      </View>
      <View style={{ height: '100%', marginTop: 192 }}>
        <Pressable onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}>
          {({ pressed }) => (
            <View>
              <Svg style={StyleSheet.absoluteFillObject}>
                <Defs>
                  <RadialGradient id="grad" fx="100" fy="75" gradientUnits="userSpaceOnUse">
                    <Stop offset="0.3" stopColor="#D92871" stopOpacity={pressed ? '0.2' : '0'} />
                    <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                  </RadialGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)" rx={32} />
              </Svg>
              <View style={styles.logOutButton}>
                <Text style={styles.logOutText}>Log Out</Text>
                <Ionicons name="log-out-outline" size={24} color="#D92871" />
              </View>
            </View>
          )}
        </Pressable>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
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
  goal: {
    marginTop: 8,
    flexDirection: 'row',
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
  logOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    paddingHorizontal: 38,
    paddingVertical: 2,
    borderRadius: 16,
    borderColor: '#D92871',
  },
  logOutText: {
    color: '#D92871',
    fontFamily: 'Regular',
    fontSize: 18,
    textAlign: 'center',
  },
});
