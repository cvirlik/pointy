import * as React from 'react';

type VibrationContextType = {
  isVibrationEnabled: boolean;
  setVibration: (enabled: boolean) => void;
};

type Props = {
  defaultValue?: boolean;
  children: React.ReactNode;
};

const VibrationContext = React.createContext<VibrationContextType | undefined>(undefined);

export default function VibrationProvider({ children }: Props) {
  const [isVibrationEnabled, setVibration] = React.useState<boolean>(true);

  return (
    <VibrationContext.Provider value={{ isVibrationEnabled, setVibration }}>
      {children}
    </VibrationContext.Provider>
  );
}

export function useVibration() {
  const context = React.useContext(VibrationContext);
  if (context === undefined) {
    throw new Error('useVibration must be used within a VibrationProvider');
  }
  return context;
}
