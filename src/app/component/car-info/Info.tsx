"use client"
import { useState, useEffect } from "react";

interface Image {
    imageId: number;
    name: string;
    url: string;
}

interface Brand {
    brandId: number;
    name: string;
    description: string;
    imageId: Image;
}

interface Car {
    carId: number;
    name: string;
    description: string;
    brandId: Brand;
    model: string;
    price: number;
    color: string;
    motorType: string;
    power: number;
    placeNumber: number;
    status: string;
    type: string;
    imageId: Image;
}

export default function CarInfo({ id }: { id: number }) {
    const [car, setCar] = useState<Car | null>(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/car/${id}`);
                const data = await response.json();
                setCar(data);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        };

        fetchCar();
    }, [id]);

    const handleInfoClick = (car: Car) => {
        window.location.href = `/client/appointment?carId=${encodeURIComponent(car.carId)}`;
    };

    return (
        <div className="max-w-screen-lg mx-auto mt-4 p-5 sm:p-10 md:p-16">
        {car && (
            <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto bg-white shadow-md relative">
                <a href="#" className="text-xl sm:text-4xl font-semibold text-center text-indigo-600 hover:text-indigo-700 transition duration-500 ease-in-out mb-2">
                    {car.name}
                </a>
                <div className="absolute top-0 right-0 mt-2 mr-2">
                   <a href="/client">
                   <span className="text-gray-800 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                   </a>     
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <div className="w-full sm:w-1/2 sm:mr-8">
                        <img className="w-full h-auto" src={car.imageId.url} alt={car.name} />
                        <div className="absolute bottom-0 left-0 mb-2 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="py-5 px-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand: {car.brandId.name}</h3>
                            <p className="text-base text-gray-700 mb-4">{car.brandId.description}</p>
                            <div className="flex items-center mb-2">
                                <img className="w-8 h-8 mr-2" src={car.brandId.imageId.url} alt={car.brandId.name} />
                                <span className="text-sm text-gray-600">{car.brandId.name} Logo</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Description:</h3>
                            <p className="text-base text-gray-700 mb-4">{car.description}</p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Model:</h3>
                                    <p className="text-base text-gray-700">{car.model}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Color:</h3>
                                <p className="text-base text-gray-700">{car.color}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Motor Type:</h3>
                                <p className="text-base text-gray-700">{car.motorType}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Power:</h3>
                                <p className="text-base text-gray-700">{car.power} HP</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Place Number:</h3>
                                <p className="text-base text-gray-700">{car.placeNumber}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Status:</h3>
                                <p className="text-base text-gray-700">{car.status}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Type:</h3>
                                <p className="text-base text-gray-700">{car.type}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Price:</h3>
                                <p className="text-base text-gray-700">${car.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-5" />
                <div className="flex justify-center mb-4">
                    <button onClick={() => handleInfoClick(car)} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Appointment</button>
                </div>
            </div>
        )}
    </div>
    
    );
}
