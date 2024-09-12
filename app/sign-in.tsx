import { Defs, RadialGradient, Rect, Stop, Svg } from 'react-native-svg';
import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { saveToken } from '@/services/storage';
import { useTheme } from '@/providers/ThemeProvider';
import { useProfile } from '@/providers/ProfileProvider';
import { useFetch } from '@/hooks/fetch';
import { ENDPOINT } from '@/constants/Requests';
import { Text, View } from '@/components/Themed';
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
      <Svg style={[{ position: 'absolute' }]}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="50%"
            ry="50%"
            fx="50%"
            fy="50%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor={theme.effectFrom} stopOpacity="1" />
            <Stop offset="1" stopColor={theme.foreground} stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" rx={16} />
      </Svg>
      <View style={{ width: '100%', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Log In</Text>
        <View style={{ width: '100%', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
            placeholder="Email"
            placeholderTextColor={theme.text}
            onChangeText={setEmail}
            autoComplete="email"
            value={email}
          />
          <TextInput
            style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
            placeholder="Password"
            placeholderTextColor={theme.text}
            onChangeText={setPassword}
            autoComplete="current-password"
            secureTextEntry
            value={password}
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
      <Svg style={{ position: 'absolute' }}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="50%"
            ry="40%"
            fx="100%"
            fy="100%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor={theme.effectFrom} stopOpacity="1" />
            <Stop offset="1" stopColor={theme.foreground} stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" rx={16} />
      </Svg>
      <View style={{ width: '100%', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={{ width: '100%', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Avatar size={86} />
          <TextInput
            style={[
              styles.input,
              {
                borderColor: theme.primary,
                color: theme.text,
                borderBottomWidth: 1,
                borderWidth: 0,
                borderRadius: 0,
                width: 'auto',
              },
            ]}
            placeholder="Nickname"
            placeholderTextColor={theme.text}
            onChangeText={setName}
            autoComplete="nickname"
            value={name}
          />
          <TextInput
            style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
            placeholder="Email"
            onChangeText={setEmail}
            placeholderTextColor={theme.text}
            autoComplete="email"
            value={email}
          />
          <TextInput
            style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
            placeholder="Password"
            placeholderTextColor={theme.text}
            onChangeText={setPassword}
            autoComplete="current-password"
            secureTextEntry
            value={password}
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
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: '100%',
  },
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
