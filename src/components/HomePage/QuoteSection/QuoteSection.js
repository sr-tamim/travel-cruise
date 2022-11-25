import React from 'react';

const quoteStyles = {
    background: 'url(/images/homepage/bgn-quote.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

// quote section in homepage
const QuoteSection = () => {
    return (
        <section className="pb-0 px-0">
            <div className="quote-wrap py-36 text-white text-center"
                style={quoteStyles}>
                <q className="block text-xl lg:text-2xl font-semibold my-10 sm:px-24 lg:px-72">
                    The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.
                </q>
                <h4 className="text-2xl lg:text-3xl font-bold my-10">ANDREA STEINBECK</h4>
            </div>
        </section>
    );
};

export default QuoteSection;