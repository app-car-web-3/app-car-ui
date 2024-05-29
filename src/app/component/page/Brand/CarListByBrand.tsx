"use client"
import { useUrl } from 'nextjs-current-url';
import { fetchData } from "../../api/api";
import React, { useEffect, useState } from "react";
import { useMockPaginate } from '../home/Pagination';

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

export default function CarListByBrand() {
    const { pathname } = useUrl() ?? {};
    let brand = "";

    if (pathname) {
        const searchParams = new URLSearchParams(window.location.search);
        brand = searchParams.get("brand") || "";
    }

    console.log(brand);
    const [cars, setCars] = useState<Car[]>([]);
    const limit = 6;

    useEffect(() => {
        fetchCarsList();
    }, [brand]);

    const fetchCarsList = async () => {
        try {
            const data = await fetchData(`http://localhost:8080/api/car/brand?brand=${brand}`);
            setCars(data as Car[]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const { nextPage, prevPage, paginatedData, currentPage } = useMockPaginate(cars, limit);

    const handleInfoClick = (car: Car) => {
        console.log("Car info clicked:", car);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-center text-3xl font-bold mb-8">Car List of {brand}</h1>
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
            <a href="http://localhost:3000/client/">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
            </a>
        </div>
    );
}
