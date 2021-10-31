import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="py-8 sm:py-12">
                <div className="container mx-auto px-4">

                    {/* footer links */}
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 className="text-xl font-bold mb-6">For Travellers</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Why Us</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Why Touring</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Share Your Review</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Travel Insurance</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Referral Program</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 className="text-xl font-bold mb-6">Interests</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Adventure</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Family Holidays</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Festivals</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Wildlife</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">About</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Our Guides</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Tour Prices</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">FAQs</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Help</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink to="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* footer logo */}
                        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <img src="/logo192.png" className="w-48 mx-auto" alt="" />
                        </div>
                    </div>

                    <div className="sm:flex sm:flex-wrap sm:-mx-4 pt-6 border-t">

                        {/* footer social links */}
                        <div className="sm:w-full px-4 md:w-1/4">
                            <h6 className="font-bold mb-2">Stay connected</h6>
                            <div className="flex">
                                <NavLink to="/" className="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/facebook.svg" className="w-full h-full" alt="" />
                                </NavLink>
                                <NavLink to="/" className="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/twitter.svg" className="w-full h-full" alt="" />
                                </NavLink>
                                <NavLink to="/" className="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/linkedin-in.svg" className="w-full h-full" alt="" />
                                </NavLink>
                            </div>
                        </div>

                        {/* footer bottom */}
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Address</h6>
                            <address className="not-italic mb-4 text-sm">
                                123 6th St.<br />
                                Melbourne, FL 32904
                            </address>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">For Operators</h6>
                            <NavLink to="/" className="mb-4 text-sm">
                                Admin Page
                            </NavLink>
                            <br />
                            <NavLink to="/" className="mb-4 text-sm">
                                Moderator Page
                            </NavLink>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Copyright</h6>
                            <p className="text-sm"
                            >2021 &copy; All rights reserved <br />
                                by <NavLink to="https://twitter.com/TaMiM__tamim"
                                    className="font-bold text-blue-700"
                                    target="_blank" rel="noreferrer">
                                    SR TAMIM</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;