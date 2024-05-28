"use client"
import DefaultPage from "./component/page/home/DefaultPage";
import ListBrand from "./component/page/home/ListBrand";
import CarList from "./component/page/search/CarList";

export default function Home() {
  return (
    <>
      <DefaultPage />
      <ListBrand />
      <CarList />
    </>
  );
}
