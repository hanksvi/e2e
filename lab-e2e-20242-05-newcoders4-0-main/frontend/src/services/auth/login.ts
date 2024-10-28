import { LoginRequest } from "@interfaces/auth/LoginRequest";
import Api from "@services/api";

export async function login(loginRequest: LoginRequest): Promise<{ token: string }> {
    const api = await Api.getInstance();
    const response = await api.post<LoginRequest, { token: string }>(
        loginRequest, 
        { url: "/auth/login" }
    );
    return response.data; 
}