import { Text as DefaultText, View as DefaultView } from 'react-native';

import { useTheme } from '@/providers/ThemeProvider';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'] & {
  type?: 'foreground' | 'background';
};

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const theme = useTheme().theme;

  return (
    <DefaultText
      style={[{ fontFamily: 'Regular', fontSize: 18, color: theme.text }, style]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, type = 'background', ...otherProps } = props;
  const theme = useTheme().theme;

  return (
    <DefaultView
      style={[
        { backgroundColor: type === 'background' ? theme.background : theme.foreground },
        style,
      ]}
      {...otherProps}
    />
  );
}
