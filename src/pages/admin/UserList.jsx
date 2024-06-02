import React from 'react';
import AdminSidebar from '../../components/AdminSidebar';

function UserList() {
    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mt-20">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex flex-wrap items-center justify-between md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                        <div>
                            <button
                                id="dropdownActionButton"
                                data-dropdown-toggle="dropdownAction"
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                type="button"
                            >
                                <span className="sr-only">Action button</span>
                                Action
                                <svg
                                    className="w-2.5 h-2.5 ml-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    aria-hidden="true"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownAction" className="z-10 hidden w-44 py-1 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a></li>
                                </ul>
                                <div className="py-1"><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a></div>
                            </div>
                        </div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" className="block w-80 p-2 pl-10 text-sm text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase text-gray-700">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-800 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Position</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-800 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                    <img className="w-10 h-10 rounded-full" src="/user.png" alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Neil Sims</div>
                                        <div className="text-gray-500 font-normal">neil.sims@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">React Developer</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 me-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</button>
                                    <button className="ml-2 font-medium text
-red-600 dark:text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-800 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img className="w-10 h-10 rounded-full" src="/user.png" alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Leslie Livingston</div>
                                        <div className="text-gray-500 font-normal">leslie@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">SEO Specialist</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 me-2"></div> Offline
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</button>
                                    <button className="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserList;
