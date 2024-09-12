import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import 'react-native-reanimated';

import VibrationProvider from '@/providers/VibrationProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import { ProfileProvider } from '@/providers/ProfileProvider';
import { WebViewBlur } from '@/components/WebViewBlur';
import { RandomCircles } from '@/components/Circle';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Regular: require('../assets/fonts/static/AnekBangla-Regular.ttf'),
    Light: require('../assets/fonts/static/AnekBangla-Light.ttf'),
    Medium: require('../assets/fonts/static/AnekBangla-Medium.ttf'),
    Bold: require('../assets/fonts/static/AnekBangla-Bold.ttf'),
    SemiBold: require('../assets/fonts/static/AnekBangla-SemiBold.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ProfileProvider>
      <ThemeProvider>
        <VibrationProvider>
          <WebViewBlur intensity={120}>
            <RandomCircles />
          </WebViewBlur>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="sign-in"
              options={{
                presentation: 'modal',
                headerShown: false,
              }}
            />
          </Stack>
        </VibrationProvider>
      </ThemeProvider>
    </ProfileProvider>
  );
}
