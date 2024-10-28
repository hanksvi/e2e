import { LoginRequest } from "@interfaces/auth/LoginRequest";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginRequest>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSuccessMessage("Login exitoso");
      setError(null);
    } catch (err) {
      setError("Error en el login");
      setSuccessMessage(null);
    }
  }

  return (
    <section className="login-section bg-secondary p-4 rounded-2xl">
      <h1 className="title">Ingresar a Uber</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
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
          />
        </div>
        <button
          id="loginSubmit"
          className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
          type="submit"
        >
          Iniciar Sesión
          className="text-2xl font-bold mb-4 text-center text-white"
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {successMessage && <div style={{ color: "blue" }}>{successMessage}</div>}
    </section>
  );
}
