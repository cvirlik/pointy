import * as React from 'react';

import { lightTheme } from '@/constants/Themes';
import type { Theme } from '@/constants/Themes';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = React.useState<Theme>(lightTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
