import VehicleInfo from "@components/VehicleInfo";
import { ChangeEvent, FormEvent, useState } from "react";

export default function EditVehiclePage() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    licensePlate: "",
    fabricationYear: "",
    capacity: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Lógica API
  }

  return (
    <main>
      <article>
        <h1>Editar Vehículo</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={formData.brand}
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
              value={formData.model}
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
              value={formData.licensePlate}
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
              value={formData.fabricationYear}
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
              value={formData.capacity}
              onChange={handleChange}
              required
            />
          </div>
          <button
            id="vehicleSubmit"
            className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer"
            type="submit"
          >
            Guardar Cambios
          </button>
        </form>
      </article>
      <VehicleInfo />
    </main>
  );
}
