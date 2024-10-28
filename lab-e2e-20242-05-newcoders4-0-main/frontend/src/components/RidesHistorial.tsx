import { useEffect, useState } from "react";
import RideItem from "./RideItem";
import { RideByUserResponse } from "@interfaces/ride/RideByUserResponse";

export default function RidesHistorial() {
	const [rides, setRides] = useState<RideByUserResponse[]>([]);

	async function fetchRides() {
		try {
			const response = await fetch("/api/rides"); // Cambia "/api/rides" al endpoint correcto
			if (response.ok) {
				const data: RideByUserResponse[] = await response.json();
				setRides(data);
			} else {
				console.error("Error al obtener el historial de viajes");
			}
		} catch (error) {
			console.error("Error en la solicitud:", error);
		}
	}

	useEffect(() => {
		fetchRides();
	}, []);

	return (
		<article className="home-section">
			<h1 className="title mb-3">Historial de viajes</h1>
			<section id="ridesHistorial">
				{rides.map((ride, index) => (
					<RideItem
						key={index}
						id={index.toString()}
						data={{
							originName: ride.originName,
							destinationName: ride.destinationName,
							price: ride.price,
							departureDate: ride.departureDate,
						}}
					/>
				))}
			</section>
		</article>
	);
}
