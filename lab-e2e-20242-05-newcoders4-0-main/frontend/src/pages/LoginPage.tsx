import { useState } from "react";
import { useAuthContext } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import img4 from "@assets/Img4.jpg";
import Button from "@components/Button";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(formData);
      setSuccessMessage("Login exitoso");
      setError(null);
      navigate("/dashboard");
    } catch (err) {
      setError("Error en el login");
      setSuccessMessage(null);
    }
  }

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <main className="flex flex-col items-center px-10 py-8 bg-background min-h-screen">
        {/* Botones de navegación */}
        <section className="flex space-x-4 mb-8">
          <Button to="/auth/login" message="Iniciar sesión" />
          <Button to="/auth/register" message="Registrarse" />
        </section>

        {/* Contenido principal de la página de inicio de sesión */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-background rounded-lg shadow-lg max-w-5xl w-full p-6">
          {/* Formulario de inicio de sesión */}
          <div className="w-full md:w-1/2 bg-card p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Ingresar a Uber</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="block mb-2 text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-border rounded mb-4"
              />
              <label className="block mb-2 text-muted-foreground">Password</label>
              <input
                type="password"
                name="password"
                placeholder="**********"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-border rounded mb-4"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-lg w-full hover:bg-primary/80 mb-4"
              >
                Iniciar Sesión
              </button>

              <div className="flex items-center justify-center mb-4">
                <hr className="w-1/5 border border-border" />
                <span className="mx-2 text-muted-foreground">o</span>
                <hr className="w-1/5 border border-border" />
              </div>

              {/* Botón de Google */}
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </form>
            {error && <div className="text-red-500 mt-4">{error}</div>}
            {successMessage && <div className="text-blue-500 mt-4">{successMessage}</div>}
          </div>

          {/* Sección de bienvenida e ilustración */}
          <div className="hidden md:block w-1/2 pl-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Bienvenido de vuelta</h2>
            <p className="text-muted-foreground mb-4">Inicia sesión para empezar a usar Uber</p>
            <img src={img4} alt="Uber illustration" className="mx-auto w-3/4 max-h-80 object-contain" />
          </div>
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
