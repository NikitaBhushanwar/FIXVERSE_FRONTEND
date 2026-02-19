import api from "./api";
import { LoginRequest, LoginResponseData, ApiResponse } from "@/types/auth";

export const login = async (data: LoginRequest) => {
  const response = await api.post<ApiResponse<LoginResponseData>>(
    "/auth/login",
    data
  );

  return response.data.data;
};
