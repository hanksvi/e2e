import { ChangeEvent, FormEvent } from "react";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";

interface RegisterFormProps {
    setVehicleRegister: (value: boolean) => void;
    formData: RegisterRequest;
    setFormData: (data: RegisterRequest) => void;
}

export default function RegisterForm({
    setVehicleRegister,
    formData,
    setFormData,
}: RegisterFormProps) {
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" || type === "radio" ? checked : value,
        });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
    }

    return (
        <section className="login-section bg-secondary p-4 rounded-2xl">
            <h1 className="text-2xl font-bold">Registrarse a Uber</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Nombres</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Apellidos</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Celular</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>¿Eres Conductor?</label>
                    <input
                        type="radio"
                        name="isDriver"
                        id="driver"
                        value="true"
                        checked={formData.isDriver === true}
                        onChange={() => setFormData({ ...formData, isDriver: true })}
                    />{" "}
                    Sí
                    <input
                        type="radio"
                        name="isDriver"
                        id="passenger"
                        value="false"
                        checked={formData.isDriver === false}
                        onChange={() => setFormData({ ...formData, isDriver: false })}
                    />{" "}
                    No
                </div>
                <button
                    type="button"
                    onClick={() => setVehicleRegister(true)} 
                    className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
                >
                    Registrar Vehículo
                </button>
                <button
                    id="registerSubmit"
                    className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
                    type="submit"
                >
                    Registrarse
                </button>
            </form>
        </section>
    );
}
