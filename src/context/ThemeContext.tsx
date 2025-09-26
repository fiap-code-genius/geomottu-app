import React, { createContext, useState, useContext, ReactNode } from 'react';
import { darkTheme, lightTheme } from '../styles/theme';

type ThemeType = typeof lightTheme;

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProviderApp = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme, isDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeApp = () => useContext(ThemeContext);
