import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/api";
import { useMockPaginate } from "../home/Pagination";

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

export default function CarList() {
    const [cars, setCars] = useState<Car[]>([]);
    const limit = 6;

    useEffect(() => {
        fetchCarsList();
    }, []);

    const fetchCarsList = async () => {
        try {
            const data = await fetchData("http://localhost:8080/api/car/all");
            setCars(data as Car[]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const { nextPage, prevPage, paginatedData, currentPage } = useMockPaginate(cars, limit);

    const handleInfoClick = (car: Car) => {
        console.log("Car info clicked:", car);
        window.location.href = `/car-info?carId=${encodeURIComponent(car.carId)}`;
    };
    
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-center text-3xl font-bold mb-8">Car List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                {paginatedData.map((car) => (
                    <div
                        key={car.carId}
                        className="card bg-base-100 shadow-xl image-full transform transition-transform duration-300 hover:scale-105"
                    >
                        <figure>
                            <img src={car.imageId.url} alt={car.imageId.name} className="w-full h-auto" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg font-bold mb-2">
                                {car.brandId.name} {car.model}
                            </h2>
                            <p className="text-white-600 mb-4">{car.description}</p>
                            <div className="card-actions flex justify-end">
                                <button onClick={() => handleInfoClick(car)} className="btn btn-primary">
                                    Info
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(cars.length / limit)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
