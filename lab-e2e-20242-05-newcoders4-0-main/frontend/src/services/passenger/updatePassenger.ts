import Api from "@services/api";
import { PassengerPatchRequest } from "@interfaces/passenger/PassengerPatchRequest";
import { PassengerResponse } from "@interfaces/passenger/PassengerResponse";

export async function updatePassenger(
	passengerPatchRequest: PassengerPatchRequest,
): Promise<PassengerResponse> {
	const api = await Api.getInstance();

	const response = await api.patch<PassengerPatchRequest, PassengerResponse>(
		passengerPatchRequest,
		{
			url: `/passengers/me`,
		}
	);

	return response.data;
}
