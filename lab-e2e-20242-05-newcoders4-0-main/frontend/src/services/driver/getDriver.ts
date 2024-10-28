import Api from "@services/api";
import { DriverResponse } from "@interfaces/driver/DriverResponse";

export async function getDriver(): Promise<DriverResponse> {
    const api = await Api.getInstance();

    const response = await api.get<void, DriverResponse>({
        url: "/drivers/me" 
    });

    return response.data;
}
