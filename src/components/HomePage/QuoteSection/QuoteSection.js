import React from 'react';
import "./QuoteSection.css";

const quoteStyles = {
    background: 'url(/images/homepage/bgn-quote.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const QuoteSection = () => {
    return (
        <section>
            <div className="quote-wrap text-white text-center"
                style={quoteStyles}>
                <blockquote className="text-2xl font-bold my-10">
                    The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.
                </blockquote>
                <h4 className="text-xl font-bold my-10">ANDREA STEINBECK</h4>
            </div>
        </section>
    );
};

export default QuoteSection;