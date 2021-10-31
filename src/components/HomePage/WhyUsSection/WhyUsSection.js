import React from 'react';

// why choose travel cruise
const WhyUsSection = () => {
    return (
        <section className="container mx-auto">
            <h1 className="text-3xl font-bold text-green-600 text-center lg:text-5xl">Why Travel With <strong className="text-green-700">Travel Cruise</strong></h1>
            <div className="flex flex-col my-8 md:flex-row">
                <div className="w-full text-center px-12 py-8 md:w-1/3">
                    <img className="inline" src="/images/homepage/why-us/save-money.png" alt="" />
                    <h4 className="text-2xl font-bold mt-4">Save Money</h4>
                    <p className="text-sm text-gray-500 px-4 sm:px-0">Get special rates and special services found nowhere else</p>
                </div>
                <div className="w-full text-center px-12 py-8 md:w-1/3">
                    <img className="inline" src="/images/homepage/why-us/get-help.png" alt="" />
                    <h4 className="text-2xl font-bold mt-4">Get Help</h4>
                    <p className="text-sm text-gray-500 px-4 sm:px-0">You drive to adventures, we get it. We and our roadside assistance partners</p>
                </div>
                <div className="w-full text-center px-12 py-8 md:w-1/3">
                    <img className="inline" src="/images/homepage/why-us/stay-safe.png" alt="" />
                    <h4 className="text-2xl font-bold mt-4">Stay Safe</h4>
                    <p className="text-sm text-gray-500 px-4 sm:px-0">We ensure the safety and security of all our customers</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;