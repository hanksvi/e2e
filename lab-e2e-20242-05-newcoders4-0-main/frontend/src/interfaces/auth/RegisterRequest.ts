import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    isDriver?: boolean;
    category: "X" | "XL" | "BLACK";
}
