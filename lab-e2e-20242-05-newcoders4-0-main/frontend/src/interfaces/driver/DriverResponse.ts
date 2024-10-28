import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";

export interface DriverResponse {  
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    category: "X" | "XL" | "BLACK";
    trips: number;
    avgRating: number;
}
