import React from 'react';

import { getToken } from '@/services/storage';

type UseFetchRequest<T extends Record<string, any> = Record<string, never>> = {
  url: string;
  body?: BodyInit | null;
  onSuccess: (data: T) => void;
  onError?: (code: number) => void;
};

type UseFetchResult = {
  request: <T extends Record<string, any> = Record<string, never>>(
    args: UseFetchRequest<T>,
  ) => void;
  state: 'loading' | 'success' | 'error' | 'idle';
};

export function useFetch(): UseFetchResult {
  const [state, setState] = React.useState<UseFetchResult['state']>('idle');

  const request = React.useCallback<UseFetchResult['request']>(async args => {
    try {
      setState('loading');
      const token = await getToken();
      const response = await fetch(args.url, {
        headers: {
          'authorization': token ?? '',
          'Content-Type': 'application/json',
        },
        body: args.body,
        method: args.body ? 'POST' : 'GET',
      });
      if (!response.ok) {
        args.onError
          ? args.onError(response.status)
          : console.error(`HTTP error! status: ${response.status}`);
        setState('error');
        return;
      }
      const data = await response.json();
      args.onSuccess(data);
      setState('success');
    } catch (errorObject) {
      args.onError ? args.onError(500) : console.error(`HTTP error! status: unknown`, errorObject);
      setState('error');
    }
  }, []);

  return { request, state };
}
