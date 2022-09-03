import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

// all months name for showing date info
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Subscribers = () => {
    const [subscribers, setSubscribers] = useState(null);

    // get subscribers from database
    useEffect(() => {
        axios.get('https://travel-cruise.netlify.app/.netlify/functions/server/subscribers')
            .then(({ data }) => {
                const modifiedData = [];
                data.forEach(d => {
                    const dateTime = new Date(d.dateTime);
                    modifiedData.push({ ...d, dateTime });
                })
                setSubscribers(modifiedData);
            })
            .catch(console.dir);
    }, [])

    // show all subscribers in a table
    return (!subscribers ? <LoadingSpinner className="my-36" width='w-16' height='h-16' /> :
        <section className="container mx-auto px-4">
            <h1 className="text-3xl font-extrabold text-green-600 text-center my-8 md:text-5xl">Subscribers</h1>
            <div className="my-8 w-full max-w-4xl mx-auto px-2">
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Time
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {subscribers.map((subscriber) => (
                                            <tr key={subscriber.email}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{subscriber.name}</div>
                                                            <div className="text-sm text-gray-500">{subscriber.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {subscriber.dateTime.getDate()}{" "}
                                                        {months[subscriber.dateTime.getMonth()]}{" "}
                                                        {subscriber.dateTime.getFullYear()}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {subscriber.dateTime.toLocaleTimeString()}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribers;