export type MockResponse<T> = {
  data: T;
  error?: string;
  status: "success" | "error";
};
