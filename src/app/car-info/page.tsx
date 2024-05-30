"use client"
import React from 'react';
import { useUrl } from 'nextjs-current-url';
import CarInfo from '../component/car-info/Info';
export default function Info(){
    const { pathname } = useUrl() ?? {};
    let carId = "";

    if (pathname) {
        const searchParams = new URLSearchParams(window.location.search);
        carId = searchParams.get("carId") || "";
    }
    
    return <section>
       <CarInfo id={Number(carId)}/>
    </section>
 
}