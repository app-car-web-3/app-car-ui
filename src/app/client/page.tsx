"use client"
import Homes from "../component/page/home/Home";
import ListBrand from "../component/page/home/ListBrand";
import CarList from "../component/page/search/CarList";

export default function Home() {
    return (
      <>
        <Homes />
        <ListBrand />
        <CarList />
      </>
    );
  }
  