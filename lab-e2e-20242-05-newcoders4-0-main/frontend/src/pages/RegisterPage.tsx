import { useState } from "react";
import Button from "@components/Button";
import RegisterForm from "@components/RegisterForm";
import RegisterVehicle from "@components/RegisterVehicle";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import img6 from "../assets/Img6.png";

export default function RegisterPage() {
	const [vehicleRegister, setVehicleRegister] = useState(false);
	const [formData, setFormData] = useState<RegisterRequest>({
		firstName: "Mateo",
		lastName: "Gamero",
		email: "mateoGamero123@gmail.com",
		password: "mateo123",
		phone: "123456789",
		isDriver: false,
		category: "X",
	});

	return (
		<main className="px-10">
			<section className="flex justify-center items-center py-4">
				<Button to="/auth/login" message="Iniciar Sesión" />
				<Button to="/auth/register" message="Registrarse" />
			</section>

			<article className="flex justify-between">
				<section className="login-section flex flex-col items-center p-4 text-center">
					<h1 className="title">¡Bienvenido!</h1>
					<p>Regístrate como pasajero o conductor para empezar con Uber</p>
					<img src={img6} alt="uber" />
				</section>
				{vehicleRegister ? (
					<RegisterVehicle />
				) : (
					<RegisterForm
						setVehicleRegister={setVehicleRegister}
						formData={formData}
						setFormData={setFormData}
					/>
				)}
			</article>
		</main>
	);
}
