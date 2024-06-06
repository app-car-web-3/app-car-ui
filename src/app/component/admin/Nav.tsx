"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
    const pathname = usePathname();
    return (
        <nav>
            <div>
                <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-black">
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

                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="/admin/users" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                                    <svg className={`w-5 h-5 block py-2 px-3 rounded md:p-0 ${pathname === '/admin' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className={`block py-2 px-3 rounded md:p-0 ${pathname === '/admin' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                                    <svg className={`w-5 h-5 block py-2 px-3 rounded md:p-0 ${pathname === '/admin/users' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span className={`block py-2 px-3 rounded md:p-0 ${pathname === '/admin/users' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Users</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.394 9.553a1 1 0 0 0-1.817.062l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .894-1.447l-2-4A1 1 0 0 0 13.2 13.4l-.53.706-1.276-2.553ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                                    </svg>
                                    <span className={`block py-2 px-3 rounded md:p-0 ${pathname === '/admin/' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Image</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">+3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                    </svg>
                                    <span className={`block py-2 px-3 rounded md:p-0 ${pathname === '/' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Car</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
                                    </svg>
                                    <span className={`block py-2 px-3 rounded md:p-0 ${pathname === '/' ? 'text-orange bg-orange-700 md:bg-transparent md:text-orange-700 dark:text-white md:dark:text-orange-500' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Appointment</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </nav>
    );
};

export default NavBar;
