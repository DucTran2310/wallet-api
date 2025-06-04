export interface ApiResponse<T> {
  isError: boolean;
  message: string;
  data: T | null;
}

export const successResponse = <T>(message: string, data: T): ApiResponse<T> => ({
  isError: false,
  message,
  data,
});

export const errorResponse = <T>(message: string, data: T | null = null): ApiResponse<T> => ({
  isError: true,
  message,
  data,
});