import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-950 to-blue-800 text-white py-8 mt-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <Link href="/Home">
                        <img
                            src="images/Logo White.png"
                            className="h-11 mx-auto md:mx-0"
                            alt="Company Logo"
                        />
                    </Link>
                    <p className="text-sm mt-4">
                        © 2024 New Primagama Fatmawati. All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0 text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li>
                                <Link
                                    href="/About"
                                    className="hover:text-gray-400"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/Services"
                                    className="hover:text-gray-400"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Contact"
                                    className="hover:text-gray-400"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/FAQ"
                                    className="hover:text-gray-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul>
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:info@company.com"
                                    className="hover:text-gray-400"
                                >
                                    example@example.com
                                </a>
                            </li>
                            <li>
                                Nomor Telpon:{" "}
                                <a
                                    href="tel:+62818936487"
                                    className="hover:text-gray-400"
                                >
                                    +62818-9364-87
                                </a>
                            </li>
                            <li>
                                Alamat: Jl. RS. Fatmawati Raya No.3, RT.3/RW.5,
                                Cilandak Bar., Kec. Cilandak, Kota Jakarta
                                Selatan, Daerah Khusus Ibukota Jakarta 12430
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex space-x-6">
                    <Link
                        href="https://www.instagram.com/newprimagamafatmawati?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        className="hover:text-gray-400"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.75 2.5h8.5a5.25 5.25 0 015.25 5.25v8.5a5.25 5.25 0 01-5.25 5.25h-8.5A5.25 5.25 0 012.5 16.25v-8.5A5.25 5.25 0 017.75 2.5zm0 1.5a3.75 3.75 0 00-3.75 3.75v8.5a3.75 3.75 0 003.75 3.75h8.5a3.75 3.75 0 003.75-3.75v-8.5a3.75 3.75 0 00-3.75-3.75h-8.5zm6.99 1.5h.01c.69 0 1.25.56 1.25 1.25v.01c0 .69-.56 1.25-1.25 1.25h-.01a1.25 1.25 0 01-1.25-1.25v-.01c0-.69.56-1.25 1.25-1.25zm-5.24 3.74a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 1.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.facebook.com"
                        target="_blank"
                        className="hover:text-gray-400"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8H7v4H4v3h3v7h3v-7h2.6L14 12H10V9.8c0-.4.2-.8.8-.8H14V6h-2.5C9.8 6 9 6.7 9 8z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.twitter.com"
                        target="_blank"
                        className="hover:text-gray-400"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.833 8.273c.012.167.012.333.012.5 0 5.096-3.88 10.976-10.976 10.976A10.916 10.916 0 012 17.78c.333.038.667.05 1 .05 1.8 0 3.47-.6 4.793-1.606a3.863 3.863 0 01-3.607-2.677c.6.088 1.1.088 1.74-.038A3.85 3.85 0 013 9.794c.688.388 1.48.65 2.32.688A3.843 3.843 0 012.8 6.1v-.05c0-.8.222-1.556.6-2.207a10.94 10.94 0 007.95 4.032 4.35 4.35 0 01-.1-.882 3.85 3.85 0 016.663-2.632 7.578 7.578 0 002.45-.938 3.846 3.846 0 01-1.693 2.12 7.67 7.67 0 002.207-.6 8.316 8.316 0 01-1.93 2.006z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        className="hover:text-gray-400"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3C3.34 3 2 4.34 2 5.98v12.04C2 19.66 3.34 21 4.98 21h14.04c1.64 0 2.98-1.34 2.98-2.98V5.98C22 4.34 20.66 3 19.02 3H4.98zM8.4 18.4H5.4v-9h3v9zM6.9 8.8h-.03c-1.01 0-1.67-.7-1.67-1.57C5.2 6.42 5.89 5.8 6.92 5.8c1.04 0 1.68.63 1.7 1.43.01.86-.66 1.57-1.72 1.57zm10.5 9.6h-3v-4.8c0-1.2-.43-2.02-1.52-2.02-.83 0-1.33.56-1.55 1.1-.08.2-.1.48-.1.76v4.96h-3s.04-8.06 0-9h3v1.28c.4-.6 1.08-1.45 2.64-1.45 1.92 0 3.36 1.26 3.36 3.97v5.2z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
