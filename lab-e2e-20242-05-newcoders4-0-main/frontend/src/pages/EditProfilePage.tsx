import Profile from "@components/Profile";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function fetchUpdateUser() {
    try {
      console.log("Updating user profile...");
      // Lógica de Api
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchUpdateUser();
    navigate("/dashboard");
  }

  return (
    <main>
      <article>
        <h1>Editar Perfil</h1>
        <Profile /> {/* Muestra el perfil actual antes del formulario */}
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
            <label htmlFor="phoneNumber">Celular</label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button
            id="updateSubmit"
            className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
            type="submit"
          >
            Actualizar
          </button>
        </form>
      </article>
    </main>
  );
}
