import { Pressable, StyleSheet, TextInput } from 'react-native';
import type { TextInputProps } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Toast } from './Toast';
import { View } from './Themed';

import { validateEmail, validateNotNullable, validatePassword } from '@/services/validation';
import { useTheme } from '@/providers/ThemeProvider';

type RichTextInputProps = TextInputProps & {
  variant?: 'regular' | 'transparent';
  kind?: 'email' | 'password' | 'not-nullable' | 'regular';
};

export function RichTextInput(props: RichTextInputProps) {
  const { variant = 'regular', secureTextEntry, kind = 'regular', ...rest } = props;

  const { theme } = useTheme();
  const [secureTextEnabled, setSecureTextEnabled] = React.useState(secureTextEntry);
  const [valid, setValid] = React.useState(true);

  return (
    <View
      style={[
        styles.textInputSection,
        { borderColor: valid ? theme.primary : theme.error },
        variant === 'regular'
          ? { backgroundColor: theme.modal }
          : {
              borderBottomWidth: 1,
              borderWidth: 0,
              borderRadius: 0,
              width: 'auto',
              alignItems: 'center',
            },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          {
            color: theme.text,
            flexGrow: Number(variant === 'regular'),
          },
        ]}
        {...rest}
        secureTextEntry={secureTextEnabled}
        onBlur={() => {
          const [validate, error] = {
            'email': [validateEmail, 'Invalid email address'] as const,
            'password': [validatePassword, 'Password must be at least 5 characters long'] as const,
            'not-nullable': [validateNotNullable, 'This field is required'] as const,
            'regular': [() => true, ''] as const,
          }[kind];

          const isValid = validate(rest.value ?? '');
          setValid(isValid);
          if (!isValid) Toast(error);
        }}
      />
      {secureTextEntry && (
        <Pressable
          style={{ marginRight: 8 }}
          onPress={() => setSecureTextEnabled(!secureTextEnabled)}
        >
          <Ionicons
            name={secureTextEnabled ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color={theme.text}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  textInputSection: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});
