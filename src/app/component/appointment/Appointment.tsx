"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fetchData } from '../api/api';
import * as z from 'zod';
import { postData } from '../api/api';
import { useUrl } from 'nextjs-current-url';

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

const schema = z.object({
  carId: z.number().min(1, 'Car ID is required'),
  name: z.string().min(1, 'Name is required'),
  firstName: z.string().min(1, 'First Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
  contact: z.string().min(1, 'Contact is required'),
  appointmentDate: z.string().min(1, 'Appointment Date is required'),
  status: z.enum(['pending', 'validated', 'rejected', 'archived']),
});

type FormData = z.infer<typeof schema>;

const AppointmentForm: React.FC = () => {
    const { pathname } = useUrl() ?? {};
    let carId = null;
    if (pathname) {
        const searchParams = new URLSearchParams(window.location.search);
        carId = searchParams.get("carId") || "";
    }
    carId == "" || null ? carId = "Select car" : carId = Number(carId) ;
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [cars, setCars] = useState<Car[]>([]);
  
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


 const  fetchCarById = async (carId: number) => {
    try {
      const car = await fetchData(`http://localhost:8080/api/car/${carId}`);
      const newCar =  car ;
      return newCar;
    } catch (error) {
      console.error("Error fetching car data:", error);
      return null;
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const car = await fetchCarById(data.carId);
      if (car) {
        const appointmentData = { ...data, car };
        const response = await postData('http://localhost:8080/api/appointment/register', appointmentData);
        console.log('Appointment created successfully!', response);
        alert('Appointment created successfully!🙂')
        window.location.href = 'http://localhost:3000/client';
      } else {
        console.error('Failed to fetch car details');
      }
    } catch (error) {
      console.error('Failed to create appointment', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100">
  <div className="w-full m-4 p-6 rounded-lg bg-white ">
    <h2 className="text-2xl font-bold mb-4 mt-12 text-center">Create Appointment</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
        <div className="flex flex-col">
          <label htmlFor="carId" className="mb-1 font-semibold">Car</label>
          <select 
            id="carId" 
            {...register('carId', { valueAsNumber: true })} 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={carId}>{carId}</option>
            {cars.map((car) => (
              <option key={car.carId} value={car.carId}>
                {car.brandId.name} {car.model}
              </option>
            ))}
          </select>
          {errors.carId && <p className="text-red-500">{errors.carId.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold">Name</label>
          <input 
            type="text" 
            id="name" 
            {...register('name')} 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-1 font-semibold">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            {...register('firstName')} 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold">Email</label>
          <input 
            type="email" 
            id="email" 
            {...register('email')} 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="contact" className="mb-1 font-semibold">Contact</label>
          <input 
            type="text" 
            id="contact" 
            {...register('contact')} 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 font-semibold">Message</label>
        <textarea 
          id="message" 
          {...register('message')} 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]" 
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="appointmentDate" className="mb-1 font-semibold">Appointment Date</label>
        <input 
          type="datetime-local" 
          id="appointmentDate" 
          {...register('appointmentDate')} 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        {errors.appointmentDate && <p className="text-red-500">{errors.appointmentDate.message}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="status" className="mb-1 font-semibold">Status</label>
        <select 
          id="status" 
          {...register('status')} 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="validated">Validated</option>
          <option value="rejected">Rejected</option>
          <option value="archived">Archived</option>
        </select>
        {errors.status && <p className="text-red-500">{errors.status.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">Create Appointment</button>
    </form>
  </div>
</div>
)};

export default AppointmentForm;
