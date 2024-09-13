import { ToastAndroid } from 'react-native';

export function Toast(message: string) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}
