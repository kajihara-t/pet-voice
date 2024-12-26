import { MockResponse } from "./types";
export const mockApiCall = async <T>(
  data: T,
  options?: {
    errorRate?: number;
    delayRange?: [number, number];
  }
): Promise<MockResponse<T>> => {
  const { errorRate = 0.1, delayRange = [500, 2000] } = options ?? {};

  // Random delay simulation
  const delay = Math.random() * (delayRange[1] - delayRange[0]) + delayRange[0];
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (Math.random() < errorRate) {
    return {
      data: null as T,
      error: "Something went wrong",
      status: "error",
    };
  }

  return {
    data,
    status: "success",
  };
};
