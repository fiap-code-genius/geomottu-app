import React, { createContext, useContext, ReactNode } from 'react';

interface FontContextType {
  fontFamily: string;
}


const FontContext = createContext<FontContextType | undefined>(undefined);


export const FontProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FontContext.Provider value={{ fontFamily: 'Afacad' }}>
      {children}
    </FontContext.Provider>
  );
};


export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};
