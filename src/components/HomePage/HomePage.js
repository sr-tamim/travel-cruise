import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Places from './Places/Places';
import QuoteSection from './QuoteSection/QuoteSection';
import SubscribeSection from './SubscribeSection/SubscribeSection';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Places />
            <QuoteSection />
            <SubscribeSection />
        </>
    );
};

export default HomePage;