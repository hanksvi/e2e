import { useNavigate, useLocation } from "react-router-dom";

interface ButtonProps {
  to: string;
  message: string;
}

export default function Button({ to, message }: ButtonProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const buttonStyle =
    location.pathname === to ? "bg-primary text-white font-bold" : "bg-secondary";

  function handleClick() {
    navigate(to);
  }

  return (
    <button
      className={`${buttonStyle} mx-6 py-2 px-4 rounded-full cursor-pointer`}
      onClick={handleClick}
    >
      {message}
    </button>
  );
}
