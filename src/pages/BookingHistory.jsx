import React from 'react';
import Mnavbar from '../components/Mnavbar';
import { useLocation } from 'react-router-dom';

function BookingHistory() {
    const location = useLocation();
    const bookingHistory = location.state?.bookingHistory || [];

    return (
        <>
            <Mnavbar />
            <div className="container mx-auto px-4 md:px-8 lg:px-32 mb-7 mt-40">
                <h1 className="text-3xl font-semibold text-center my-6">Booking History</h1>
                {bookingHistory.length === 0 ? (
                    <p className="text-center text-gray-500">No bookings found.</p>
                ) : (
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">Title</th>
                                    <th scope="col" className="px-6 py-3">Description</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingHistory.map((item, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4">
                                            <img src={item.images[0]} className="w-16 md:w-32 max-w-full max-h-full" alt={item.title} />
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{item.title}</td>
                                        <td className="px-6 py-4 text-gray-900 dark:text-white">{item.description}</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">${item.price}</td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}

export default BookingHistory;
