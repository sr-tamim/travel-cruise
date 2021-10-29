import React from 'react';

const Loading = () => {
    return (
        <section className="flex justify-center">
            <button type="button"
                class="bg-green-600 px-8 py-6 md:px-12 text-4xl text-white
                rounded-xl font-bold my-36" disabled>
                <img class="animate-spin h-12 w-12 inline-block mr-3" src="/images/spinner.svg" alt="spinner" /> Loading
            </button>
        </section>
    );
};

export default Loading;