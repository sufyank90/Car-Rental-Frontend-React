import React from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <div>
                <AdminSidebar />
                <div className="p-4 sm:ml-64 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <Link to="/adminlist" className="flex flex-col items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200">
                            <img src="/user.png" alt="Icon" className="h-12 w-12 mb-2" />
                            <h3 className="text-2xl text-gray-400 dark:text-gray-500">Total Users</h3>
                            <p className="text-4xl text-gray-900 dark:text-white mt-2">1,234</p>
                        </Link>
                        <Link to="/bookings" className="flex flex-col items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200">
                            <svg className="w-10 h-10 text-gray-800 dark:text-white mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
                            </svg>
                            <h3 className="text-2xl text-gray-400 dark:text-gray-500">Total Bookings</h3>
                            <p className="text-4xl text-gray-900 dark:text-white mt-2">567</p>
                        </Link>
                        <Link to="/subscribers" className="flex flex-col items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200">
                            <svg className="w-10 h-10 text-gray-800 dark:text-white mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                            </svg>
                            <h3 className="text-2xl text-gray-400 dark:text-gray-500">Total Subscribers</h3>
                            <p className="text-4xl text-gray-900 dark:text-white mt-2">789</p>
                        </Link>
                        <Link to="/admininbox" className="flex flex-col items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200">
                            <svg className="w-10 h-10 text-gray-800 dark:text-white mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clipRule="evenodd"/>
                            </svg>
                            <h3 className="text-2xl text-gray-400 dark:text-gray-500">Total Queries</h3>
                            <p className="text-4xl text-gray-900 dark:text-white mt-2">345</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
