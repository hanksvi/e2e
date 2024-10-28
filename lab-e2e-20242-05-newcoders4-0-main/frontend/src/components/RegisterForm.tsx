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
        <section className="login-section bg-secondary p-6 rounded-2xl shadow-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Registrarse a Uber</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="block text-muted-foreground">Nombres</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-muted-foreground">Apellidos</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border border-border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-muted-foreground">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-muted-foreground">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-muted-foreground">Celular</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-border rounded"
                    />
                </div>
                <div>
                    <label className="block text-muted-foreground mb-2">¿Eres Conductor?</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="isDriver"
                                id="driver"
                                value="true"
                                checked={formData.isDriver === true}
                                onChange={() => setFormData({ ...formData, isDriver: true })}
                                className="mr-2"
                            />
                            Sí
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="isDriver"
                                id="passenger"
                                value="false"
                                checked={formData.isDriver === false}
                                onChange={() => setFormData({ ...formData, isDriver: false })}
                                className="mr-2"
                            />
                            No
                        </label>
                    </div>
                </div>
                {formData.isDriver && (
                    <button
                        type="button"
                        onClick={() => setVehicleRegister(true)}
                        className="bg-primary text-white font-bold py-2 px-4 rounded-full cursor-pointer w-full mb-4"
                    >
                        Registrar Vehículo
                    </button>
                )}
                <button
                    id="registerSubmit"
                    className="bg-primary text-white font-bold py-2 px-4 rounded-full cursor-pointer w-full"
                    type="submit"
                >
                    Registrarse
                </button>
            </form>
        </section>
    );
}
