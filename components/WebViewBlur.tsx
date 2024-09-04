import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import React from 'react';
import { SplashScreen } from 'expo-router';

import { View, type ViewProps } from './Themed';

export function WebViewBlur(props: ViewProps & { intensity: number; index?: number }) {
  const { intensity, children, style, index, ...rest } = props;

  return (
    <View type="foreground" style={[styles.view, style, { zIndex: index }]} {...rest}>
      {children}
      <WebView
        onLoad={() => SplashScreen.hideAsync()}
        style={styles.webView}
        source={{
          html: `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                }
                #blur {
                    width:100%;
                    height:100%;
                    backdrop-filter:blur(${intensity}px)
                }
            </style>
            <div id="blur"></div>
        `,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  webView: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
