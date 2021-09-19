import { useState } from 'react';

export function useFeaching(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fatching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fatching, isLoading, error];
}
