import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';
import WhatsAppLink from './WhatsAppLink';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

  return (
    <AppLayout>
        <div className="bg-gray-100 text-gray-800 p-8">
      <section className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-12 h-96 overflow-hidden rounded-lg shadow-lg" data-aos="fade-up">
          <img
            src="./images/spanduk 459x217 cmyk.jpg"
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-white animate-fade-in">Lorem</h2>
          </div>
        </div>

        {/* Company Introduction */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="./images/gedung.png"
            alt="Company"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 transform hover:scale-105 transition duration-300"
          />
          <div>
            <h2 className="text-4xl font-semibold mb-4 text-gray-900">Perkenalam Perusahaan</h2>
            <p className="text-lg text-gray-600">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore temporibus nisi corporis recusandae soluta vero exercitationem corrupti! In enim perferendis tenetur officia accusantium, laboriosam consequatur ut? Reprehenderit dolorem labore cupiditate?            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Sejarah Perusahaan</h2>
          <p className="text-lg mb-6 text-gray-600">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non blanditiis tenetur porro, modi tempore provident voluptatum ex, quidem dignissimos nisi? Mollitia commodi aspernatur vero optio deserunt similique recusandae voluptatibus!
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">In [Year], we achieved [Milestone]</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">In [Year], we launched [Product/Service]</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">In [Year], we expanded to [Location]</h3>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Misi Kami </h2>
          <p className="text-lg text-gray-600">
            We are committed to delivering the best products and services to our customers while continuously innovating and improving our processes.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Tim Kami</h2>
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform hover:scale-105 transition duration-300">
              <img
                src="./images/robot zen.png"
                alt="Team Member"
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <h3 className="text-xl font-semibold text-gray-800">Raifan</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform hover:scale-105 transition duration-300">
              <img
                src="./images/robot zen.png"
                alt="Team Member"
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <h3 className="text-xl font-semibold text-gray-800">Trimei</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Kelebihan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">We uphold the highest standards of integrity in all our actions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously seek new and innovative ways to improve our products and services.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600">Our customers are at the center of everything we do.</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Tonton Video perjalanan Kami </h2>
          <div className="flex justify-center">
            <iframe
              className="w-full md:w-3/4 h-64 rounded-lg shadow-lg"
              src="./images/wheels on the bus .mp4"
              title="Company Journey"
              frameBorder="0"
              allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    <div className="bg-gray-100 py-16 relative z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-center mb-12">
                            Hubungi Kami
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div
                                className="col-span-2 bg-white rounded-lg shadow-md p-6"
                                data-aos="fade-right"
                            >
                                <h2 className="text-2xl font-semibold mb-4">
                                    Kirim Pesan
                                </h2>
                                <form id="Contact">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Nama
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="Nama Anda"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="Email Anda"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Pesan
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="Pesan Anda"
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Kirim Pesan
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-md p-6 text-center"
                                data-aos="fade-left"
                            >
                                <h2 className="text-2xl font-semibold mb-4">
                                    Hubungi langsung
                                </h2>
                                <p className="text-lg mb-4">
                                    Telepon: +62 818936487
                                    <br />
                                    Email: example@example.com
                                    <br />
                                    Alamat: Jl. RS. Fatmawati Raya No.3,
                                    RT.3/RW.5, Cilandak Bar., Kec. Cilandak,
                                    Kota Jakarta Selatan, Daerah Khusus Ibukota
                                    Jakarta 12430
                                </p>
                                <WhatsAppLink />
                            </div>
                        </div>
                    </div>
                </div>

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
            
    </AppLayout>
  );
}

export default AboutUs;
