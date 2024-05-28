"use client"
import React from "react";
import SearchBar from "@/app/component/page/search/SearchBar";
import CarList from "@/app/component/page/search/CarList";
export default function SearchCar() {
    const handleSearch = (query: string) => {
       
    };
    return (
        <section className="mt-20 p-8">
            <SearchBar onSearch={handleSearch} />
            <CarList/>
        </section>
    );
}
