import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';

const AboutPage = () => {
    return (
        <section>
            <h1 className="text-3xl font-extrabold text-green-600 text-center my-6 lg:text-5xl">About Us</h1>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center py-16 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-4 lg:pr-48">
                            Let us show you the world
                        </h2>
                        <p className="text-justify lg:pr-36">
                            Our team of travel insiders is obsessed with finding the best things to do everywhere: we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of
                            traveler. And we are proud to say that after 17 experience-packed years, we are the world leader.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img className="w-full" src="/images/aboutpage/about-update-1.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col flex-wrap items-center lg:flex-row">
                    <div className="w-full my-6 lg:px-20 md:w-1/2">
                        <h4 className="text-xl font-bold">
                            <CheckIcon className="inline h-7 w-7 mb-1 mr-1 text-green-700" aria-hidden="true" />
                            20+ Years of Experience</h4>
                        <p className="w-full max-w-80 pl-8">We are very proud to say that we can give you the best advice for your trip.</p>
                    </div>
                    <div className="w-full my-6 lg:px-20 md:w-1/2">
                        <h4 className="text-xl font-bold">
                            <CheckIcon className="inline h-7 w-7 mb-1 mr-1 text-green-700" aria-hidden="true" />
                            Reasonable Price
                        </h4>
                        <p className="w-full max-w-80 pl-8">We offer one of the most reasonable price throughout the market.</p>
                    </div>
                    <div className="w-full my-6 lg:px-20 md:w-1/2">
                        <h4 className="text-xl font-bold">
                            <CheckIcon className="inline h-7 w-7 mb-1 mr-1 text-green-700" aria-hidden="true" />
                            Professional Local Tour Guide
                        </h4>
                        <p className="w-full max-w-80 pl-8">You will be full of information with our exceptional local tour guide.</p>
                    </div>
                    <div className="w-full my-6 lg:px-20 md:w-1/2">
                        <h4 className="text-xl font-bold">
                            <CheckIcon className="inline h-7 w-7 mb-1 mr-1 text-green-700" aria-hidden="true" />
                            24/7 Friendly Support
                        </h4>
                        <p className="w-full max-w-80 pl-8">Any problems will be solved in just a minute with our support staff.</p>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl text-center font-bold mt-20 sm:text-3xl lg:text-5xl">Tour consult expert: <strong className="text-green-600 font-extrabold">(+01)-900-234-5434</strong></h2>
        </section>
    );
};

export default AboutPage;