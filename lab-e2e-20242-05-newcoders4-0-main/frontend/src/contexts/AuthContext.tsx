import { useStorageState } from "@hooks/useStorageState";
import { LoginRequest } from "@interfaces/auth/LoginRequest";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import Api from "@services/api";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface AuthContextType {
    register: (data: RegisterRequest) => Promise<void>;
    login: (data: LoginRequest) => Promise<void>;
    logout: () => void;
    session?: string | null;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function login(loginRequest: LoginRequest): Promise<{ token: string }> {
    const api = await Api.getInstance();
    const response = await api.post<LoginRequest, { token: string }>(
        loginRequest,
        { url: "/auth/login" }
    );
    return response.data; // Asegúrate de que el backend responde con `{ token: string }`
}

async function registerService(registerRequest: RegisterRequest): Promise<{ token: string }> {
    const api = await Api.getInstance();
    const response = await api.post<RegisterRequest, { token: string }>(
        registerRequest,
        { url: "/auth/register" }
    );
    return response.data; // Asegúrate de que el backend responde con `{ token: string }`
}

async function loginHandler(
    loginRequest: LoginRequest,
    setSession: (value: string) => void
) {
    const response = await login(loginRequest);
    setSession(response.token); // Utiliza `response.token` si es un objeto `{ token: string }`
}

async function signupHandler(
    signupRequest: RegisterRequest,
    setSession: (value: string) => void
) {
    const response = await registerService(signupRequest);
    setSession(response.token); // Utiliza `response.token` si es un objeto `{ token: string }`
}

export function AuthProvider(props: { children: ReactNode }) {
    const [[isLoading, session], setSession] = useStorageState("token"); // Aquí desestructuramos `isLoading` y `session`

    useEffect(() => {
        if (session) {
            Api.getInstance().then((api) => {
                api.authorization = session;
            });
        }
    }, [session]);

    const login = (data: LoginRequest) => loginHandler(data, setSession);
    const register = (data: RegisterRequest) => signupHandler(data, setSession);
	const logout = () => {
		setSession(null);
		Api.getInstance().then((api) => {
			api.authorization = ""; 
		});
	};

    return (
        <AuthContext.Provider value={{ register, login, logout, session, isLoading }}>
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
