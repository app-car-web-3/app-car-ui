"use client";
import React, { useState, useEffect } from "react";
import { fetchData, deleteData } from "../../api/api";
import { useMockPaginate } from "../../page/home/Pagination";

interface Image {
    imageId: number;
    name: string;
    url: string;
}

export default function ImageList() {
    const [images, setImages] = useState<Image[]>([]);
    const limit = 6;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await fetchData("http://localhost:8080/api/image/all");
                setImages(data as Image[]);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchUsers();
    }, []);

    const { nextPage, prevPage, paginatedData, currentPage } = useMockPaginate(images, limit);

    const updateUser = (img: Image) => {
        window.location.href = `/admin/images/update-image?imageId=${encodeURIComponent(img.imageId)}`;
    }

    const deleteUser = async (img: Image): Promise<void> => {
        const confirmDelete = window.confirm("Are you sure you want to delete this image?");
        if (confirmDelete) {
        try {
            await deleteData(`http://localhost:8080/api/image/${img.imageId}`);
            window.location.href = 'http://localhost:3000/admin/images';
        } catch (error) {
            console.error("Error deleting image:", error);
        }} else {
            window.location.href = 'http://localhost:3000/admin/images';
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((img, index) => (
                        <tr key={img.imageId}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img.url} alt={img.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{img.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{img.name}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => updateUser(img)}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="btn btn-ghost btn-xs text-red-500" onClick={() => deleteUser(img)}>
                                    <svg className="w-6 h-6 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
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
                    disabled={currentPage === Math.ceil(images.length / limit)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
