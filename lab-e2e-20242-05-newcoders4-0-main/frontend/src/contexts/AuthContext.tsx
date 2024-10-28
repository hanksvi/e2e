import { useStorageState } from "@hooks/useStorageState";
import { LoginRequest } from "@interfaces/auth/LoginRequest";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import Api from "@services/api";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { login } from "@services/auth/login"; // Importar login
import { register } from "@services/auth/register"; // Importar register

interface AuthContextType {
	register: (data: RegisterRequest) => Promise<void>;
	login: (data: LoginRequest) => Promise<void>;
	logout: () => void;
	session?: string | null;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(props: { children: ReactNode }) {
	const [[isLoading, session], setSession] = useStorageState("token");

	useEffect(() => {
        if (session) {
            try {
                Api.getInstance().then((api) => {
                    api.authorization = session;
                });
            } catch (error) {
                console.error("Error setting authorization:", error);
            }
        }
    }, [session]);

	const loginUser = async (data: LoginRequest) => { // Cambiar a loginUser
		const response = await login(data); // Usar login importado
		setSession(response.token);
	};

	const registerUser = async (data: RegisterRequest) => { // Cambiar a registerUser
		const response = await register(data); // Usar register importado
		setSession(response.token);
	};

	const logout = () => {
		setSession(null);
		Api.getInstance().then((api) => {
			api.authorization = ""; 
		});
	};

	return (
		<AuthContext.Provider value={{ register: registerUser, login: loginUser, logout, session, isLoading }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
}
