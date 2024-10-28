import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@contexts/AuthContext";

export default function ProtectedRoute() {
	const authContext = useAuthContext();

	if (authContext.isLoading) return null;

	if (!authContext.session) {
		return <Navigate to={`/auth/login?from=${location.pathname}`} replace />;
	}

	return <Outlet />;
}
