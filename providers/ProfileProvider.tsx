import React from 'react';

import { globalEvents, TOKEN_CHANGED_EVENT } from '@/services/event-emitter';
import { useFetch } from '@/hooks/fetch';
import { ENDPOINT } from '@/constants/Requests';

export type Transaction = {
  date: Date;
  title: string;
  description: string;
  price: number;
  category: string;
};

export type TransactionGroup = {
  date: `${number}-${number}-${number}`;
  transactions: Transaction[];
};

export type User = {
  name: string;
  email: string;
  password: string;
  currentGoal: number;
  currentGoalDescription: string;
  balance: number;
  cardNumber: number;
  transactions: Transaction[];
};

const ProfileContext = React.createContext<{
  profile: User | null;
  transactions: TransactionGroup[] | null;
  refetch: () => void;
}>({
  profile: null,
  transactions: null,
  refetch: () => {},
});

export function ProfileProvider(props: React.PropsWithChildren) {
  const [profile, setProfile] = React.useState<User | null>(null);
  const [transactions, setTransaction] = React.useState<TransactionGroup[] | null>(null);
  const { request } = useFetch();

  const refetch = React.useCallback(() => {
    console.log('Fetching user profile...');
    request<{ user: User; transactions: TransactionGroup[] }>({
      url: `${ENDPOINT}/user`,
      onSuccess: data => {
        setProfile(data.user);
        setTransaction(data.transactions);
        console.log(data.transactions);
      },
      onError: code => {
        console.log('Error during fetching', code);
        if (code === 401) {
          setProfile(null);
          setTransaction(null);
        }
      },
    });
  }, [request]);

  React.useEffect(() => {
    globalEvents.on(TOKEN_CHANGED_EVENT, refetch);

    return () => {
      globalEvents.off(TOKEN_CHANGED_EVENT, refetch);
    };
  }, [refetch]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ProfileContext.Provider value={{ profile, transactions, refetch }}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
