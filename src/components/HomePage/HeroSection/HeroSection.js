import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

// toppest section in homepage
export default function HeroSection() {
    const { user } = useContext(UserContext);

    return (
        <section className="p-0">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-screen-2xl mx-auto my-8 md:my-0">
                    <div className="relative z-10 md:py-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-36 xl:pb-48">
                        {/* all texts */}
                        <div className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block text-gray-800 xl:inline">
                                        Travel Cruise</span>{' '}
                                    <span className="block text-green-600 xl:inline">Enjoy Your Tour</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                                    Our team of travel insiders is obsessed with finding the best things to do everywhere: we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of traveler.
                                </p>
                                <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                                    <div>
                                        <Link
                                            to="/tours"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                                        >Get started
                                        </Link>
                                    </div>
                                    {!user && <div>
                                        <Link
                                            to="/authentication"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                                        >Login
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 xl:w-1/2">
                    {/* img and text divider svg */}
                    <svg
                        className="hidden lg:block absolute left-0 inset-y-0 h-full w-72 text-white -translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/images/homepage/bgn-home-hero.jpg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}