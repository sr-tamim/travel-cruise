import React from 'react';

const quoteStyles = {
    background: 'url(/images/homepage/bgn-quote.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const QuoteSection = () => {
    return (
        <section className="pb-0 px-0">
            <div className="quote-wrap py-36 text-white text-center"
                style={quoteStyles}>
                <blockquote className="text-xl lg:text-2xl font-bold my-10 sm:px-24 lg:px-72">
                    The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.
                </blockquote>
                <h4 className="text-xl font-bold my-10">ANDREA STEINBECK</h4>
            </div>
        </section>
    );
};

export default QuoteSection;