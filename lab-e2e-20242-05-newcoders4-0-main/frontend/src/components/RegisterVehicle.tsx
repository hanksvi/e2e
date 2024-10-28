import { ChangeEvent, FormEvent, useState } from "react";

interface VehicleData {
	brand: string;
	model: string;
	licensePlate: string;
	fabricationYear: number;
	capacity: number;
	category: "X" | "XL" | "BLACK";
}

export default function RegisterVehicle() {
	const [category, setCategory] = useState<"X" | "XL" | "BLACK">("X");
	const [vehicleData, setVehicleData] = useState<VehicleData>({
		brand: "",
		model: "",
		licensePlate: "",
		fabricationYear: 0,
		capacity: 0,
		category: "X",
	});

	function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		const { name, value } = e.target;
		setVehicleData((prevData) => ({
			...prevData,
			[name]: name === "fabricationYear" || name === "capacity" ? Number(value) : value,
		}));
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			console.log("Datos enviados:", { ...vehicleData, category });
		} catch (error) {
			console.error("Error al registrar vehículo:", error);
		}
	}

	return (
		<section className="login-section bg-secondary p-4 rounded-2xl">
			<h1 className="text-2xl font-bold">Registra tu vehículo</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="category">Category</label>
					<select
						name="category"
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value as "X" | "XL" | "BLACK")}
						required
					>
						<option value="X">X</option>
						<option value="XL">XL</option>
						<option value="BLACK">BLACK</option>
					</select>
				</div>
				<div>
					<label htmlFor="brand">Brand</label>
					<input
						type="text"
						name="brand"
						id="brand"
						value={vehicleData.brand}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="model">Model</label>
					<input
						type="text"
						name="model"
						id="model"
						value={vehicleData.model}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="licensePlate">License Plate</label>
					<input
						type="text"
						name="licensePlate"
						id="licensePlate"
						value={vehicleData.licensePlate}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="fabricationYear">Fabrication Year</label>
					<input
						type="number"
						name="fabricationYear"
						id="fabricationYear"
						value={vehicleData.fabricationYear}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="capacity">Capacity</label>
					<input
						type="number"
						name="capacity"
						id="capacity"
						value={vehicleData.capacity}
						onChange={handleChange}
						required
					/>
				</div>
				<button
					id="registerVehicleSubmit"
					className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
					type="submit"
				>
					Registrarse
				</button>
			</form>
		</section>
	);
}