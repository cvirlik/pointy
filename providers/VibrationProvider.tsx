import * as React from 'react';

import { getVibro, saveVibro } from '@/services/storage';

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
  React.useEffect(() => {
    void (async () => {
      const storedVibrationSetting = await getVibro();
      if (storedVibrationSetting !== null) {
        setVibration(storedVibrationSetting === 'true');
      }
    })();
  }, []);

  // Save vibration setting to storage whenever it changes
  const updateVibration = async (enabled: boolean) => {
    setVibration(enabled);
    await saveVibro(enabled ? 'true' : 'false');
  };

  return (
    <VibrationContext.Provider value={{ isVibrationEnabled, setVibration: updateVibration }}>
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
