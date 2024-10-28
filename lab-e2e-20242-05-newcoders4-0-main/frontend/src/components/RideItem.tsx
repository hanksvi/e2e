import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";

interface RideItemProps {
	id: string;
	data: {
		originName: string;
		departureDate: string; // Asegúrate de que sea un string con formato de fecha
		destinationName: string;
		price: number;
	};
}

export default function RideItem({ id, data }: RideItemProps) {
	// Formatear la fecha (opcional, dependiendo del formato de entrada)
	const formattedDate = new Date(data.departureDate).toLocaleDateString("es-ES", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	// Formatear el precio a dos decimales
	const formattedPrice = data.price.toFixed(2);

	return (
		<section
			id={id}
			className="bg-tertiary text-white rounded-2xl p-4 grid grid-cols-2 grid-rows-2 gap-2 mb-4"
		>
			<div className="flex items-center">
				<FaLocationDot aria-label="Ícono de origen" />
				<b className="ml-2">Origen:</b>
				<p id="origin" className="ml-2">
					{data.originName}
				</p>
			</div>

			<div className="flex items-center">
				<TbClockHour4Filled aria-label="Ícono de hora de salida" />
				<b className="ml-2">Fecha Salida:</b>
				<p id="departure" className="ml-2">
					{formattedDate}
				</p>
			</div>

			<div className="flex items-center">
				<FaMapLocationDot aria-label="Ícono de destino" />
				<b className="ml-2">Destino:</b>
				<p id="destination" className="ml-2">
					{data.destinationName}
				</p>
			</div>

			<div className="flex items-center">
				<AiFillDollarCircle aria-label="Ícono de precio" />
				<b className="ml-2">Precio:</b>
				<p id="price" className="ml-2">
					${formattedPrice}
				</p>
			</div>
		</section>
	);
}
