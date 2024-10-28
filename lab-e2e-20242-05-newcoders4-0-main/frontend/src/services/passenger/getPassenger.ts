import Api from "@services/api";
import { PassengerResponse } from "@interfaces/passenger/PassengerResponse";

export async function getPassenger(): Promise<PassengerResponse> {
    const api = await Api.getInstance();

    const response = await api.get<void, PassengerResponse>({
        url: `/passengers/me`
    });

    return response.data;
}

