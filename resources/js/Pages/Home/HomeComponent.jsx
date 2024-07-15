import React, { useEffect } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./wallpaper.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import dataPisa from "./bardataPISA"; // Mengimpor dataPisa
import dataProblems from "./dataProblem"; // Mengimpor dataProblems
import WhatsAppLink from "./WhatsAppLink";
import contentData from "./contentData";
import komponen from "./KomponenBelajar";
import CardHarga from "@/Components/cardHarga"; // Sesuaikan dengan path import yang benar
import DataHarga from "./DataHarga"; // Sesuaikan dengan path import yang benar
import { Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";

const HomeComponent = ({ displayText }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative">
            <AppLayout>
                <div className="mx-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div
                            className="md:col-span-3 text-center z-20"
                            data-aos="fade-up"
                        >
                            <img
                                src="/images/spanduk 459x217 cmyk.jpg"
                                alt="Logo"
                                className="mx-auto mb-8 relative top-1"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden bg-white text-black py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8" data-aos="fade-up">
                            <h1 className="text-4xl font-bold mb-4">
                                {dataPisa.title}
                            </h1>
                        </div>
                        <div className="relative h-96" data-aos="fade-up">
                            <Bar
                                data={dataPisa.barData}
                                options={dataPisa.barOptions}
                            />
                        </div>
                        <div className="relative overflow-hidden bg-white text-black py-16">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-4xl font-bold text-center mb-12">
                                    Faktor-faktor PISA
                                </h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <img
                                        src="./images/PISA.png" // Ganti dengan path gambar logo
                                        alt="Logo"
                                        className="absolute inset-0 w-1/2  opacity-10 m-auto"
                                    />
                                    {dataPisa.description.map((item, index) => (
                                        <div
                                            key={index}
                                            data-aos="fade-up"
                                            data-aos-delay={`${index * 100}`}
                                            className="text-lg mb-8 text-gray-600 bg-white hover:shadow-2xl shadow-xl p-3 text-center"
                                        >
                                            <h2 className="text-xl font-semibold mb-2">
                                                <b>{item.title}</b>
                                            </h2>
                                            <p>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white text-gray-800 relative z-30 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div
                                className="md:col-span-3 text-center"
                                data-aos="fade-up"
                            >
                                <h1 className="text-4xl font-bold mb-4">
                                    {dataProblems.title}
                                </h1>
                            </div>
                            <div
                                className="md:col-span-1 text-center relative top-2"
                                data-aos="fade-right"
                            >
                                <img
                                    src={dataProblems.imageUrl}
                                    alt={dataProblems.imageAlt}
                                    className="w-80 mx-auto"
                                />
                            </div>
                            <div
                                className="md:col-span-2 text-black"
                                data-aos="fade-left"
                            >
                                <p className="text-lg mb-8">
                                    <ul className="mb-2">
                                        {dataProblems.issues.map(
                                            (issue, index) => (
                                                <li key={index}>
                                                    <FontAwesomeIcon
                                                        icon={faCheck}
                                                        style={{
                                                            color: "#63E6BE",
                                                            marginRight: "5px",
                                                        }}
                                                    />
                                                    {issue}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    {dataProblems.conclusion}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 text-gray-800 relative z-30 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div
                                className="md:col-span-3 text-center"
                                data-aos="fade-up"
                            >
                                <h1 className="text-4xl font-bold mb-4">
                                    {contentData[0].title}
                                </h1>
                            </div>
                        </div>
                        <img
                            src="./images/Reverse.png" // Ganti dengan path gambar logo
                            alt="Logo"
                            className="absolute inset-0 w-1/2  opacity-10 m-auto"
                        />
                        {contentData.map((data, index) => (
                            <div
                                key={data.id}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                            >
                                {index % 2 === 0 ? (
                                    <>
                                        <div
                                            className="md:col-span-1 text-center relative top-2"
                                            data-aos={data.aosImage}
                                        >
                                            <img
                                                src={data.imgSrc}
                                                alt={data.imgAlt}
                                                className="w-80 mx-auto"
                                            />
                                        </div>
                                        <div
                                            className="md:col-span-2 text-black"
                                            data-aos={data.aosText}
                                        >
                                            <h1
                                                data-aos="fade-up"
                                                className="text-4xl font-bold mb-4"
                                            >
                                                {data.heading}
                                            </h1>
                                            <p className="text-lg mb-8">
                                                {data.text}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div
                                            className="md:col-span-2 text-black"
                                            data-aos={data.aosText}
                                        >
                                            <h1
                                                data-aos="fade-up"
                                                className="text-4xl font-bold mb-4"
                                            >
                                                {data.heading}
                                            </h1>
                                            <p className="text-lg mb-8">
                                                {data.text}
                                            </p>
                                        </div>
                                        <div
                                            className="md:col-span-1 text-center relative top-2"
                                            data-aos={data.aosImage}
                                        >
                                            <img
                                                src={data.imgSrc}
                                                alt={data.imgAlt}
                                                className="w-80 mx-auto"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white text-black py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <img
                            src="./images/Reverse.png" // Ganti dengan path gambar logo
                            alt="Logo"
                            className="absolute inset-0 w-1/2  opacity-10 m-auto"
                        />
                        <h1 className="text-4xl font-bold text-center mb-12">
                            Komponen Belajar
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {komponen.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-center"
                                    data-aos="fade-up"
                                    data-aos-delay={`${item.id * 100}`}
                                >
                                    <img
                                        src={item.imgSrc}
                                        alt={item.imgAlt}
                                        className="w-16 h-16 mx-auto mb-4"
                                    />
                                    <h2 className="text-xl font-semibold mb-2">
                                        {item.title}
                                    </h2>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 text-gray-800 relative z-30 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center" data-aos="fade-up">
                            <h1 className="text-4xl font-bold mb-4">
                                Biaya Investasi T.P 2024-2025
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {DataHarga.map((kelas) => (
                                <CardHarga
                                    key={kelas.id}
                                    title={kelas.title}
                                    price={kelas.price}
                                    facilities={kelas.facilities}
                                    sampai={kelas.sampai}
                                    program={kelas.program}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white text-gray-800 relative z-30 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center" data-aos="fade-up">
                            <h1 className="text-4xl font-bold mb-4">
                                Testimoni
                            </h1>
                            <p className="text-lg mb-8">
                                Dengar apa yang orang tua dan siswa kami katakan
                                tentang kami.
                            </p>
                        </div>
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            interval={5000}
                        >
                            <div className="testimonial-item">
                                <p className="text-lg italic">
                                    "Sangat membantu anak saya dalam belajar.
                                    Guru-guru sangat profesional dan sabar."
                                </p>
                                <h2 className="text-xl font-semibold mt-4">
                                    - Budi, Orang Tua Siswa
                                </h2>
                            </div>
                            <div className="testimonial-item">
                                <p className="text-lg italic">
                                    "Materi yang diberikan sangat mudah
                                    dipahami. Saya berhasil naik peringkat di
                                    kelas."
                                </p>
                                <h2 className="text-xl font-semibold mt-4">
                                    - Ani, Siswa SMA
                                </h2>
                            </div>
                            <div className="testimonial-item">
                                <p className="text-lg italic">
                                    "Fasilitas dan layanannya sangat lengkap.
                                    Anak saya sangat senang belajar di sini."
                                </p>
                                <h2 className="text-xl font-semibold mt-4">
                                    - Ratna, Orang Tua Siswa
                                </h2>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <WhatsAppLink />
                <div
                    className="md:col-span-1 text-center relative top-2"
                    data-aos="fade-left"
                >
                    <div style={{ overflow: "hidden" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.806268294965!2d106.7925888740973!3d-6.289176161555781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ead17c309f%3A0xc1f346ea893a18be!2sZENIUS%20CENTER!5e0!3m2!1sid!2sid!4v1720591356159!5m2!1sid!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <Footer />
            </AppLayout>
        </div>
    );
};

export default HomeComponent;
