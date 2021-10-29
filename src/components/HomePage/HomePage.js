import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Places from './Places/Places';
import QuoteSection from './QuoteSection/QuoteSection';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Places />
            <QuoteSection />
        </>
    );
};

export default HomePage;