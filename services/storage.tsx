import AsyncStorage from '@react-native-async-storage/async-storage';

import { globalEvents, TOKEN_CHANGED_EVENT } from './event-emitter';

const THEME_KEY = 'theme';
const VIBRO_KEY = 'vibro';
const TOKEN_KEY = 'token';

export async function saveTheme(theme: 'lightTheme' | 'darkTheme' | 'monochromeTheme') {
  await AsyncStorage.setItem(THEME_KEY, theme);
}

export async function getTheme() {
  try {
    return await AsyncStorage.getItem(THEME_KEY);
  } catch (error) {
    console.error('Cannot read theme', error);
    return null;
  }
}

export async function saveVibro(enabled: 'true' | 'false') {
  await AsyncStorage.setItem(VIBRO_KEY, enabled);
}

export async function getVibro() {
  try {
    return await AsyncStorage.getItem(VIBRO_KEY);
  } catch (error) {
    console.error('Cannot read vibro setting', error);
    return null;
  }
}

export async function saveToken(token: string) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  globalEvents.emit(TOKEN_CHANGED_EVENT);
}

export async function getToken() {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Cannot read token', error);
    return null;
  }
}

export async function deleteToken() {
  await AsyncStorage.removeItem(TOKEN_KEY);
  globalEvents.emit(TOKEN_CHANGED_EVENT);
}
