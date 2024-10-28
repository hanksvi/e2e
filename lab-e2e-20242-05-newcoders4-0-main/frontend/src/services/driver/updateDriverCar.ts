import Api from "@services/api";
import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";

export async function updateDriverCar(id: number, vehicle: VehicleResponse): Promise<VehicleResponse> {
    const api = await Api.getInstance();

    const response = await api.put<VehicleResponse, VehicleResponse>(
        vehicle,
        {
            url: `/drivers/${id}/car`
        }
    );

    return response.data;
}