"use client"
import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/api";
import { useMockPaginate } from "../../page/home/Pagination";


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


interface Appointment {
    appointmentId: number;
    carId: Car;
    name: string;
    firstName: string;
    email: string;
    message: string | null;
    contact: string | null;
    appointmentDate: string;
    status: Status;
}

enum Status {
    Pending = 'pending',
    Validated = 'validated',
    Rejected = 'rejected',
    Archived = 'archived'
}

export default function ListAppointment() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const limit = 6;

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const data = await fetchData("http://localhost:8080/api/appointment/all");
                setAppointments(data as Appointment[]);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };

        fetchAppointment();
    }, []);

    const { nextPage, prevPage, paginatedData, currentPage } = useMockPaginate(appointments, limit);

    return <div className="overflow-x-auto">
        <p className="text-center text-4xl font-black text-gray-900 dark:text-white">List Appointment</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>FirstName</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>contact</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {paginatedData.map((appointment, index) => (
                    <tr key={appointment.appointmentId}>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <td>{appointment.appointmentId}</td>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{appointment.name}</td>
                        <td>{appointment.firstName}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.message}</td>
                        <td>{appointment.contact}</td>
                        <td>{appointment.appointmentDate}</td>
                        <td>{appointment.status}</td>
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
                disabled={currentPage === Math.ceil(appointments.length / limit)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>
        </div>
    </div>
}