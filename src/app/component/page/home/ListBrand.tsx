import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/api";
import { useMockPaginate } from "./Pagination";

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

export default function ListBrand() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const limit = 6;

    useEffect(() => {
        fetchBrandsList();
    }, []);

    const fetchBrandsList = async () => {
        try {
            const data = await fetchData("http://localhost:8080/api/brand/all");
            setBrands(data as Brand[]);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    const { nextPage, prevPage, paginatedData, currentPage } = useMockPaginate(brands, limit);

    return (
        <div className="container  mx-auto py-8">
            <h1 className="text-center text-3xl font-bold mb-8">List of brands</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                {paginatedData.map((brand) => (
                    <div key={brand.brandId} className="flex">
                        <img
                            src={brand.imageId.url}
                            alt={brand.imageId.name}
                            className="w-1/2 h-auto object-cover"
                        />
                        <div className="flex flex-col justify-center ml-4">
                            <h2 className="text-xl font-bold mb-2">{brand.name}</h2>
                            <p className="text-gray-700">{brand.description}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Watch
                            </button>
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
                    disabled={currentPage === Math.ceil(brands.length / limit)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
