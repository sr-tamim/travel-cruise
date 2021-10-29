import React from 'react';

const Loading = () => {
    return (
        <section className="flex justify-center">
            <div
                class="text-4xl text-black rounded-xl font-extrabold my-36" disabled>
                <img class="animate-spin h-28 w-28 inline-block mr-3" src="/images/spinner.svg" alt="spinner" />
            </div>
        </section>
    );
};

export default Loading;