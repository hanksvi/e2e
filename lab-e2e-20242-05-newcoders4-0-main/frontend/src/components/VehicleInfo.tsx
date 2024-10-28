import { useEffect, useState } from "react";
import { FaTaxi } from "react-icons/fa6";
import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";

export default function VehicleInfo() {
  const [profileInfo, setProfileInfo] = useState<VehicleResponse | undefined>(undefined);

  async function fetchVehicleInfo() {
    const vehicleData: VehicleResponse = {
      brand: "Toyota",
      model: "Corolla",
      licensePlate: "ABC-123",
      fabricationYear: 2020,
      capacity: 4,
    };
    setProfileInfo(vehicleData);
  }

  useEffect(() => {
    fetchVehicleInfo();
  }, []);

  return (
    <article>
      <h1 className="title mb-3">Vehículo</h1>
      <section className="flex">
        <div className="w-2/5">
          <FaTaxi className="w-full text-9xl" />
        </div>
        {profileInfo ? (
          <ul className="w-3/5 ml-6 list-disc">
            <li id="vehicleModel">
              <b>Modelo:</b> {profileInfo.brand} {profileInfo.model}
            </li>
            <li id="licenseNumber">
              <b>Placa:</b> {profileInfo.licensePlate}
            </li>
            <li id="yearOfFabrication">
              <b>Año de fabricación:</b> {profileInfo.fabricationYear}
            </li>
            <li id="capacityNumber">
              <b>Capacidad:</b> {profileInfo.capacity}
            </li>
          </ul>
        ) : (
          <p>Cargando información del vehículo...</p>
        )}
      </section>
    </article>
  );
}