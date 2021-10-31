import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Places from './Places/Places';
import QuoteSection from './QuoteSection/QuoteSection';
import SubscribeSection from './SubscribeSection/SubscribeSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';

// homepage
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <WhyUsSection />
            <Places />
            <QuoteSection />
            <SubscribeSection />
        </>
    );
};

export default HomePage;