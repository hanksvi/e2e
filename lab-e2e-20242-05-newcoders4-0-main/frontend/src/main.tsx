// main.tsx
import { AuthProvider } from "@contexts/AuthContext";
import "@styles/App.css";
import "@styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import App from "./App";
import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegisterPage";
import DashboardPage from "@pages/DashboardPage";
import EditProfilePage from "@pages/EditProfilePage";
import EditVehiclePage from "@pages/EditVehiclePage";
import ProtectedRoute from "@router/ProtectedRoute";
import NotFoundPage from "@pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth/login" replace />, // Redirige a login al acceder a la ruta base
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "auth/login",
                element: <LoginPage />,
            },
            {
                path: "auth/register",
                element: <RegisterPage />,
            },
            {
                path: "dashboard",
                element: <ProtectedRoute />,
                children: [
                    { path: "", element: <DashboardPage /> },
                    { path: "edit-profile", element: <EditProfilePage /> },
                    { path: "edit-vehicle", element: <EditVehiclePage /> },
                ],
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);
