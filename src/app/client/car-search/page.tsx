"use client"
import { useState } from "react";
import SearchBar from "@/app/component/page/search/SearchBar";
import CarListByBrand from "@/app/component/page/Brand/CarListByBrand";
export default function SearchCar() {

    const [searchResult, setSearchResult] = useState('');

    const handleSearch = (query: string) => {
       setSearchResult(query);
    };
    return (
        <section className="mt-20 p-8">
            <SearchBar onSearch={handleSearch} />
            <CarListByBrand url="http://localhost:8080/api/car/brand-name"  brand={searchResult}/>
        </section>
    );
}
