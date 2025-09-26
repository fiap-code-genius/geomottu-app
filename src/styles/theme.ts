const base = {
  fontFamily: 'Afacad',
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 60,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 20,
    xxl: 32,  
    full: 999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
  },
};

export const lightTheme = {
  ...base,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    secondaryText: '#222222ff',  
    primary: '#08AD39',
    secondary: '#005336ff',
    border: '#E0E0E0',
    card: '#F5F5F5',
    error: '#E53935',
    highlight: '#FFD600',
    muted: '#222222ff',
    buttonText: '#000000',
    inputBackground: '#F5F5F5',
    placeholder: '#999999',
  },
};

export const darkTheme = {
  ...base,
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    secondaryText: '#BBBBBB', 
    primary: '#08AD39',
    secondary: '#005336ff',
    border: '#424242',
    card: '#212121',
    error: '#E53935',
    highlight: '#FFEB3B',
    muted: '#AAAAAA',
    buttonText: '#FFFFFF',
    inputBackground: '#1C1C1C',
    placeholder: '#777777',
  },
};
