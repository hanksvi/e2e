import { DriverResponse } from "@interfaces/driver/DriverResponse";
import { PassengerResponse } from "@interfaces/passenger/PassengerResponse";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getRoleBasedOnToken } from "src/utils/getRoleBasedOnToken";

export default function Profile() {
	const [profileInfo, setProfileInfo] = useState<DriverResponse | PassengerResponse>();

	useEffect(() => {
		fetchProfileInfo();
	}, []);

	async function fetchProfileInfo() {
		try {
			const role = getRoleBasedOnToken();
			if (role === "ROLE_DRIVER") {
				const driverData: DriverResponse = await fetchDriverInfo();
				setProfileInfo(driverData);
			} else if (role === "ROLE_PASSENGER") {
				const passengerData: PassengerResponse = await fetchPassengerInfo();
				setProfileInfo(passengerData);
			} else {
				console.error("Error: No role found");
			}
		} catch (error) {
			console.error("Error fetching profile info:", error);
		}
	}
	async function fetchDriverInfo(): Promise<DriverResponse> {
		return {
			firstName: "John",
			lastName: "Doe",
			email: "john.doe@example.com",
			phoneNumber: "123456789",
			category: "X",
			trips: 120,
			avgRating: 5,

		};
	}

	async function fetchPassengerInfo(): Promise<PassengerResponse> {
		return {
			firstName: "Jane",
			lastName: "Smith",
			email: "jane.smith@example.com",
			phoneNumber: "987654321",
			trips: 80,
		};
	}

	return (
		<article>
			<h1 className="title mb-3">Perfil</h1>
			<section className="flex">
				<div className="w-2/5">
					<FaUserCircle className="w-full text-9xl" />
				</div>
				<ul className="w-3/5 ml-6 list-disc">
					<li id="profileNames">
						{profileInfo?.firstName} {profileInfo?.lastName}
					</li>
					<li id="profileEmail">{profileInfo?.email}</li>
					<li id="profilePhone">{profileInfo?.phoneNumber}</li>
					<li id="profileTrips">
						<b>N° viajes:</b> {profileInfo?.trips}
					</li>
				</ul>
			</section>
		</article>
	);
}
