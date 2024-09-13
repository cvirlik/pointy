import { StyleSheet } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { saveToken } from '@/services/storage';
import { useTheme } from '@/providers/ThemeProvider';
import { useProfile } from '@/providers/ProfileProvider';
import { useFetch } from '@/hooks/fetch';
import { ENDPOINT } from '@/constants/Requests';
import { Toast } from '@/components/Toast';
import { Text, View } from '@/components/Themed';
import { RichTextInput } from '@/components/RichTextInput';
import { RadialGradientEffect } from '@/components/RadialGradientEffect';
import { PageContainer } from '@/components/PageContainer';
import { OutlineButton } from '@/components/OutlineButton';
import { Card } from '@/components/Card';
import { Avatar } from '@/components/Avatar';

function LogInCard(props: { onSignUp: () => void }) {
  const { theme } = useTheme();
  const { request } = useFetch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <Card style={{ alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <RadialGradientEffect cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%" />
      <View style={{ width: '100%', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Log In</Text>
        <View style={{ width: '100%', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
          <RichTextInput
            placeholder="Email"
            placeholderTextColor={theme.text}
            onChangeText={setEmail}
            autoComplete="email"
            value={email}
            kind="email"
          />
          <RichTextInput
            placeholder="Password"
            placeholderTextColor={theme.text}
            onChangeText={setPassword}
            autoComplete="current-password"
            secureTextEntry
            value={password}
            kind="password"
          />
        </View>
        <View style={{ width: '100%', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
          <OutlineButton
            text="Log In"
            color={theme.secondary}
            colorFill={theme.secondaryOpacity}
            icon={<Ionicons name="log-in-outline" size={24} color={theme.secondary} />}
            fontSize={16}
            onPress={() => {
              console.log(email, password);
              request<{ token: string }>({
                url: `${ENDPOINT}/login`,
                body: JSON.stringify({ email, password }),
                onSuccess: ({ token }) => {
                  console.log('Logged in successfully with token:', token);
                  void saveToken(token);
                },
                onError: code => {
                  console.log('Error logging in', code);
                  Toast('Profile not found or invalid credentials');
                },
              });
            }}
          />
          <OutlineButton
            onPress={props.onSignUp}
            text="Sign Up"
            color={theme.disabled}
            colorFill={theme.disabledOpacity}
            withoutOutline
            fontSize={16}
          />
        </View>
      </View>
    </Card>
  );
}
function SingUpCard(props: { onLogIn: () => void }) {
  const { request } = useFetch();
  const { theme } = useTheme();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <Card style={{ alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <RadialGradientEffect cx="50%" cy="50%" rx="50%" ry="40%" fx="100%" fy="100%" />
      <View style={{ width: '100%', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={{ width: '100%', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Avatar size={86} />
          <RichTextInput
            variant="transparent"
            placeholder="Nickname"
            placeholderTextColor={theme.text}
            onChangeText={setName}
            autoComplete="nickname"
            value={name}
            kind="not-nullable"
          />
          <RichTextInput
            placeholder="Email"
            onChangeText={setEmail}
            placeholderTextColor={theme.text}
            autoComplete="email"
            value={email}
            kind="email"
          />
          <RichTextInput
            placeholder="Password"
            placeholderTextColor={theme.text}
            onChangeText={setPassword}
            autoComplete="current-password"
            secureTextEntry
            value={password}
            kind="password"
          />
        </View>
        <View style={{ width: '100%', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
          <OutlineButton
            text="Sign Up"
            color={theme.secondary}
            colorFill={theme.secondaryOpacity}
            icon={<Ionicons name="log-in-outline" size={24} color={theme.secondary} />}
            fontSize={16}
            onPress={() => {
              console.log(email, password);
              request<{ token: string }>({
                url: `${ENDPOINT}/register`,
                body: JSON.stringify({ name, email, password }),
                onSuccess: ({ token }) => {
                  console.log('Sign up successfully with token:', token);
                  void saveToken(token);
                },
                onError: code => {
                  console.log('Error sign up', code);
                  Toast('Error sign up');
                },
              });
            }}
          />
          <OutlineButton
            onPress={props.onLogIn}
            text="Log In"
            color={theme.disabled}
            colorFill={theme.disabledOpacity}
            withoutOutline
            fontSize={16}
          />
        </View>
      </View>
    </Card>
  );
}

export default function ModalScreen() {
  const { profile } = useProfile();
  const [signUp, setSignUp] = React.useState(false);

  if (profile) {
    return <Redirect href="/" />;
  }

  return (
    <PageContainer style={styles.container}>
      {signUp ? (
        <SingUpCard onLogIn={() => setSignUp(false)} />
      ) : (
        <LogInCard onSignUp={() => setSignUp(true)} />
      )}
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'SemiBold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
