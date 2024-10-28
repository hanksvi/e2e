import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import Api from "@services/api";

export async function register(registerRequest: RegisterRequest): Promise<{ token: string }> {
    const api = await Api.getInstance();
    
    
    const response = await api.post<RegisterRequest, { token: string }>(
        registerRequest,
        { url: "/auth/register" }
    );
    

    return response.data; 
}