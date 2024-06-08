import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        onClose(); 
        window.location.href = "http://localhost:3000/admin";
      } else {
        console.error("Erreur d'authentification");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion au backend:", error);
    }
  };

  if (!isOpen) {
    return null;
  }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative w-[30%] h-[85%] mt-20 bg-white p-6 rounded-3xl shadow-lg">
        <div className="flex justify-end">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white hover:scale-105 transition duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            onClick={onClose}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </div>

        <div className="font-medium flex flex-row justify-between mt-8 mx-4">
          <p className="mt-3 text-base">Connexion</p>
          <button className="w-28 px-4 py-2 text-sm text-black rounded-3xl border border-black bg-white hover:scale-105 transition duration-300 ease-in-out">
            S'inscrire
          </button>
        </div>

        <form className="space-y-4 mt-6 mx-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700"
            >
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:border-gray-600"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:border-gray-600"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-6 mx-4 bg-gray-800 rounded-3xl hover:bg-gray-600 transition duration-300 ease-in-out w-full px-4 py-2 text-white"
          >
            Se connecter
          </button>
        </form>

        <section className="mx-4 text-justify text-sm mt-5">
          <p>
            En cliquant sur Se connecter, vous acceptez de respecter les{" "}
            <span className="text-blue-500 underline">
              Condition d'utilisation
            </span>{" "}
            et le{" "}
            <span className="text-blue-500 underline">
              Réglement concernant la confidentialité
            </span>{" "}
            de Dabanao.
          </p>
        </section>
      </div>
    </div>
    );
};

export default Login;
