interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </div>

        <div className="font-medium flex flex-row justify-between mt-8 mx-4">
          <p className="mt-3 text-base">Connexion</p>
        </div>

        <form className="space-y-4 mt-6 mx-4">
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
            />
          </div>
        </form>
        <section className="flex justify-between mt-5">
          <div className="flex flex-row mx-4">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-sm mx-2">Staying connected</p>
          </div>
          <p className="text-xs underline mt-1 mx-4">Forgot your password?</p>
        </section>

        <div className="mt-6 mx-4 bg-gray-800 rounded-3xl hover:bg-gray-600 transition duration-300 ease-in-out">
          <button type="submit" className="w-full px-4 py-2 text-white">
            Login
          </button>
        </div>
         
         <section className="mx-4 text-justify text-sm mt-5">
            <p>By clicking on Log in, you agree to respect the <span className="text-blue-500 underline">Conditions of use</span> and the <span className="text-blue-500 underline">Confidentiality rules</span> of Dabanao.</p>
         </section>
      </div>
    </div>
  );
};
export default Login;
