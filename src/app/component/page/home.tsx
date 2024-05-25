import NavBar from '../page/nav';
import BackgroundCarousel from '../page/BackgroundCarousel';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <NavBar />
            <main className="flex flex-col items-center justify-center h-full text-center">
                <BackgroundCarousel />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl font-bold text-white">Find the car of your dreams</h1>
                    <p className="text-lg text-gray-300 mt-4">Discover our selection of top-quality cars.</p>
                    <br />
                    <br />
                    <a href="#car-search" className="mt-8 px-6  py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Car search</a>
                </div>
            </main>
        </div>
    );
}
