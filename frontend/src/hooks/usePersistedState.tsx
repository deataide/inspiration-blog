import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T>(key: string, defaultValue: T):Response<T> {
  const [state, setState] = useState(() => {
    const StorageValue = localStorage.getItem(key);

    if (StorageValue) {
      return JSON.parse(StorageValue);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}