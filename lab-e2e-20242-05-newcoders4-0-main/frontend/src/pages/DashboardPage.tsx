import Profile from "@components/Profile";
import RidesHistorial from "@components/RidesHistorial";
import VehicleInfo from "@components/VehicleInfo";
import { getRoleBasedOnToken } from "src/utils/getRoleBasedOnToken";

export default function DashboardPage() {
	return (
		<main className="p-10 grid grid-cols-2 gap-10">
			<div className="home-section">
				<Profile />
				<button id="editProfile" onClick={() => {}}>
					Editar
				</button>
			</div>

			{getRoleBasedOnToken() === "ROLE_DRIVER" ? (
				<div className="home-section">
					<VehicleInfo />
					<button id="editProfile" onClick={() => {}}>
						Editar
					</button>
				</div>
			) : (
				<RidesHistorial />
			)}
		</main>
	);
}