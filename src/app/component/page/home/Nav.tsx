"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Login from './LoginForm';

const NavBar: React.FC = () => {
    const pathname = usePathname();

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginOpen(true);
    }

    const handleClose = () => {
        setIsLoginOpen(false);
    }

      return (
        <nav className="fixed top-0 w-full flex items-center justify-between bg-black bg-opacity-40 py-2 shadow-md dark:bg-neutral-700 lg:py-4 z-20">
            <div className="flex w-full items-center justify-between px-3">
                <div>
                    <Link href="/">
                        <div className={`mx-2 my-1 flex items-center lg:mb-0 lg:mt-0 ${pathname === '/' ? 'active' : ''}`}>
                            <img
                                src="/rm-vaika.png"
                                style={{ height: '60px', width: '80px' }}
                                alt="TE Logo"
                                loading="lazy"
                            />
                        </div>
                    </Link>
                </div>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <Link href="/client" >
                                <div className={`block py-2 px-3 rounded md:p-0 ${pathname === '/client' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/client/car-search/">
                                <div className={`block py-2 px-3 rounded md:p-0 ${pathname === '/client/car-search' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>
                                    Car search
                                </div>
                            </Link>
                        </li>
                             <li>
                            <Link href="/client/appointment">
                                <div className={`block py-2 px-3 rounded md:p-0 ${pathname === '/client/appointment' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>
                                    Appointment
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0 text-white" href="#">
                        <span 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                        onClick={handleLoginClick}
                        >
                            Login
                        </span>
                    </a>
                </div>
            </div>
            <Login isOpen={isLoginOpen} onClose={handleClose}/>
        </nav>
    );
};

export default NavBar;
