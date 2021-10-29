import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="py-8 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 className="text-xl font-bold mb-6">For Travellers</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Why Us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Why Touring</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Share Your Review</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Travel Insurance</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Referral Program</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 className="text-xl font-bold mb-6">Interests</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Adventure</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Family Holidays</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Festivals</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Wildlife</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">About</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Our Guides</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Tour Prices</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">FAQs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Help</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <img src="/logo192.png" className="w-48 mx-auto" alt="" />
                        </div>
                    </div>

                    <div className="sm:flex sm:flex-wrap sm:-mx-4 pt-6 border-t">
                        <div className="sm:w-full px-4 md:w-1/4">
                            <h6 className="font-bold mb-2">Stay connected</h6>
                            <div className="flex">
                                <a href="/" className="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/facebook.svg" className="w-full h-full" alt="" />
                                </a>
                                <a href="/" className="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/twitter.svg" className="w-full h-full" alt="" />
                                </a>
                                <a href="/" className="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/linkedin-in.svg" className="w-full h-full" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Address</h6>
                            <address className="not-italic mb-4 text-sm">
                                123 6th St.<br />
                                Melbourne, FL 32904
                            </address>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">For Operators</h6>
                            <a href="/" className="mb-4 text-sm">
                                Admin Page
                            </a>
                            <br />
                            <a href="/" className="mb-4 text-sm">
                                Moderator Page
                            </a>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Copyright</h6>
                            <p className="text-sm"
                            >2021 &copy; All rights reserved <br />
                                by <a href="https://twitter.com/TaMiM__tamim"
                                    className="font-bold text-blue-700"
                                    target="_blank" rel="noreferrer">
                                    SR TAMIM</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;