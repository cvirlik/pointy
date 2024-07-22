import { Platform } from 'react-native';
import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Link } from 'expo-router';

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string },
) {
  return (
    <Link
      target="_blank"
      {...props}
      href={props.href}
      onPress={event => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          void WebBrowser.openBrowserAsync(props.href as string);
        }
      }}
    />
  );
}
