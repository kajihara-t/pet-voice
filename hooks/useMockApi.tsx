import { useState } from "react";
import type { MockResponse } from "@/__mocks__/api/types";

export function useMockApi<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async (
    apiCall: () => Promise<MockResponse<T>>
  ): Promise<T | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiCall();
      if (response.status === "error") {
        setError(response.error || "Unknown error");
        return null;
      }
      return response.data;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    execute,
    isLoading,
    error,
  };
}
