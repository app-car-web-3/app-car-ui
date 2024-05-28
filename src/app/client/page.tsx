"use client"
import Homes from "../component/page/home/Home";
import ListBrand from "../component/page/home/ListBrand";
import CarList from "../component/page/search/CarList";
import Footer from "../component/page/Footer/Footer";
import ContactForm from "../component/page/contact/Form";

export default function Home() {
    return (
      <>
        <Homes />
        <ListBrand />
        <CarList />
        <ContactForm />
        <Footer />
      </>
    );
  }
  