import * as React from 'react';

import { getTheme, saveTheme } from '@/services/storage';
import { darkTheme, lightTheme, monochromeTheme } from '@/constants/Themes';
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
  React.useEffect(() => {
    void (async () => {
      const storedTheme = await getTheme();
      if (storedTheme === 'darkTheme') {
        setTheme(darkTheme);
      } else if (storedTheme === 'monochromeTheme') {
        setTheme(monochromeTheme);
      } else if (storedTheme === 'lightTheme') {
        setTheme(lightTheme);
      }
    })();
  }, []);

  const updateTheme = async (newTheme: Theme) => {
    setTheme(newTheme);
    const themeKey =
      newTheme === darkTheme
        ? 'darkTheme'
        : newTheme === monochromeTheme
          ? 'monochromeTheme'
          : 'lightTheme';
    await saveTheme(themeKey);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
