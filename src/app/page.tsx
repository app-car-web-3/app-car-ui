"use client"
import DefaultPage from "./component/page/home/DefaultPage";
import ListBrand from "./component/page/home/ListBrand";
import CarList from "./component/page/search/CarList";
import ContactForm from "./component/page/contact/Form";
import Footer from "./component/page/Footer/Footer";

export default function Home() {
  return (
    <>
      <DefaultPage />
      <ListBrand />
      <CarList />
      <ContactForm />
      <Footer />
    </>
  );
}
