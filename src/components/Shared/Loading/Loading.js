import React from 'react';

// loading spinner
const Loading = () => {
    return (
        <section className="flex justify-center">
            <div
                className="text-4xl text-black rounded-xl font-extrabold my-36" disabled>
                <img className="h-28 w-28 inline-block mr-3" src="/images/spinner.svg" alt="spinner" />
            </div>
        </section>
    );
};

export default Loading;