"use client"
import React from "react";
import { useUrl } from 'nextjs-current-url';
import CarListByBrand from "@/app/component/page/Brand/CarListByBrand";

export default function SearchCar() {
    const { pathname } = useUrl() ?? {};
    let brand = "";

    if (pathname) {
        const searchParams = new URLSearchParams(window.location.search);
        brand = searchParams.get("brand") || "";
    }
    return (
        <section className="mt-20 p-8">
            <CarListByBrand url="http://localhost:8080/api/car/brand"  brand={brand}/>
        </section>
    );
}
