import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer class="py-8 sm:py-12">
                <div class="container mx-auto px-4">
                    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 class="text-xl font-bold mb-6">For Travellers</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Why Us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Why Touring</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Share Your Review</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Travel Insurance</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Referral Program</a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 class="text-xl font-bold mb-6">Interests</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Adventure</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Family Holidays</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Festivals</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Wildlife</a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 class="text-xl font-bold mb-6">About</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Our Guides</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Tour Prices</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">FAQs</a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 class="text-xl font-bold mb-6">Help</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <img src="/logo192.png" className="w-48 mx-auto" alt="" />
                        </div>
                    </div>

                    <div class="sm:flex sm:flex-wrap sm:-mx-4 pt-6 border-t">
                        <div class="sm:w-full px-4 md:w-2/4">
                            <h6 class="font-bold mb-2">Stay connected</h6>
                            <div class="flex">
                                <a href="/" class="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/facebook.svg" className="w-full h-full" alt="" />
                                </a>
                                <a href="/" class="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/twitter.svg" className="w-full h-full" alt="" />
                                </a>
                                <a href="/" class="w-10 h-10 rounded-full text-center p-2 hover:bg-green-200">
                                    <img src="/images/linkedin-in.svg" className="w-full h-full" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 class="font-bold mb-2">Address</h6>
                            <address class="not-italic mb-4 text-sm">
                                123 6th St.<br />
                                Melbourne, FL 32904
                            </address>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 class="font-bold mb-2">Free Resources</h6>
                            <p class="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.<br />
                                <em>All are MIT License</em></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;