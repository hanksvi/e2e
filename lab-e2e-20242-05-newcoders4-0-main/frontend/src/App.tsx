import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import EditProfilePage from "./pages/EditProfilePage";
import EditVehiclePage from "./pages/EditVehiclePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./components/Profile"; // Opcional, si quieres mostrar el perfil en una ruta específica

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/edit-profile" element={<EditProfilePage />} />
                        <Route path="/edit-vehicle" element={<EditVehiclePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </Router>
        </AuthProvider>
    );
}

