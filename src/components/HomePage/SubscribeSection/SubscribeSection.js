import axios from 'axios';
import React, { useRef } from 'react';

// subscription section in homepage
const SubscribeSection = () => {
    const emailRef = useRef();
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const dateTime = Date.now();
        axios.post('https://travel-cruise-server.netlify.app/.netlify/functions/server/subscription', {
            subscriptionInfo: { email, dateTime }
        }).then(({ data }) => data.insertedId && alert('Thanks For Your Subscription'));
        event.target.reset();
    }
    return (
        <section
            style={{
                background: 'url(/images/homepage/bgn-subscribe.jpg) no-repeat',
                backgroundSize: 'cover', backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto text-white px-2 py-24">
                <h5>IT'S TIME FOR DISCOUNTS</h5>
                <h1 className="text-5xl font-bold text-green-50">Subscribe <strong className="font-extrabold">& Travel!</strong></h1>
                <div className="my-4">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            ref={emailRef}
                            required
                            autoComplete="email"
                            placeholder="Email address"
                            className="w-full sm:w-96 text-black border-none outline-none py-3 rounded sm:text-sm"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto py-2 px-6 border border-transparent font-bold rounded-md text-white bg-green-600 hover:bg-green-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;