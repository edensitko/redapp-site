import { useState } from 'react';
import { ApiResponse } from '../types';

interface UseApiOptions {
  immediate?: boolean;
}

export function useApi<T>(url: string, options: UseApiOptions = {}) {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: options.immediate ?? false
  });

  const execute = async (
    params?: Record<string, string>,
    method: string = 'GET',
    body?: any
  ): Promise<void> => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const queryString = params
        ? `?${new URLSearchParams(params).toString()}`
        : '';

      const response = await fetch(`${url}${queryString}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred'
      });
    }
  };

  return {
    ...state,
    execute,
  };
}

// Example usage:
// const { data, error, loading, execute } = useApi<BlogPost>('/api/posts/1');
