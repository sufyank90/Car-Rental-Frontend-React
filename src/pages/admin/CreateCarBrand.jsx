import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

function CreateCarBrand() {
    const [brands, setBrands] = useState([
        {
            id: 1,
            name: 'Toyota',
            description: 'Reliable and durable cars.',
        },
        {
            id: 2,
            name: 'Honda',
            description: 'Fuel-efficient and affordable vehicles.',
        },
        {
            id: 3,
            name: 'Ford',
            description: 'Powerful and robust trucks.',
        },
    ]);

    const handleEdit = (id) => {
        // Handle edit logic here
        console.log('Edit brand with id:', id);
    };

    const handleDelete = (id) => {
        // Handle delete logic here
        console.log('Delete brand with id:', id);
    };

    return (
        <>
            <AdminSidebar />
            <div className="max-w-md mx-auto p-4 mt-32 text-left">
                <form className="space-y-5">
                    <div className="relative z-0 w-full group mb-4">
                        <input type="text" name="brand_name" id="brand_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="brand_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand Name</label>
                    </div>
                    <div className="relative z-0 w-full group">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>

            <div className="p-4 sm:ml-64">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Brand Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.map((brand) => (
                                <tr
                                    key={brand.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {brand.name}
                                    </th>
                                    <td className="px-6 py-4">{brand.description}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleEdit(brand.id)}
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(brand.id)}
                                            className="text-red-600 dark:text-red-500 hover:underline ml-4"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CreateCarBrand;
