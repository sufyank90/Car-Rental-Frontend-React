import React, { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

function Mnavbar() {
    const API_URL ='http://localhost:8000/api/';
console.log(API_URL); // Should log 'http://localhost:8000/api/'


    const [openModal, setOpenModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
    const [openConfirmModal, setOpenConfirmModal] = useState(false); // Confirmation modal state

    function onCloseModal() {
        setOpenModal(false);
        setLogoutModal(false);
        setEmail('');
        setIsLogin(true); // Reset to login form when modal is closed
    }

    function toggleForm() {
        setIsLogin(!isLogin);
    }

    function onCloseConfirmModal() {
        setOpenConfirmModal(false);
    }

    return (
        <>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        {isLogin ? (
                            <>
                                <Formik
                                    initialValues={{ username: '', password: '' }}
                                    onSubmit={async (values) => {
                                        console.log(values);
                                        await axios.post(`${API_URL}login`, values)
                                            .then((result) => {
                                                localStorage.setItem("token", result.data.access);
                                                console.log("submited", result);
                                            })
                                            .catch((err) => {
                                                console.log("Error", err);
                                            });
                                    }}
                                >
                                    <Form>
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Login to Account</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="username" value="Your username" />
                                            </div>
                                            <Field
                                                name="username"
                                                type="text"
                                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Username"
                                            />
                                        </div>

                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="password" value="Your password" />
                                            </div>
                                            <Field
                                                name="password"
                                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                id="password"
                                                type="password"
                                                placeholder="password"
                                            />
                                        </div>
                                        <div className="w-full mt-5">
                                            <Button type='submit'>Login</Button>
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?&nbsp;
                                    <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500" onClick={toggleForm}>
                                        Create account
                                    </a>
                                </div>
                            </>
                        ) : (
                            <>
                                <Formik
                                    initialValues={{ username: '', email: '', password: '' }}
                                    onSubmit={(values) => {
                                        console.log(values);
                                        axios.post(`${API_URL}signup`, values)
                                            .then((result) => {
                                                console.log("submited", values);
                                            })
                                            .catch((err) => {
                                                console.log("Error", err);
                                            });
                                    }}
                                >
                                    <Form>
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create an account</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="username" value="Your username" />
                                            </div>
                                            <Field
                                                name="username"
                                                type="text"
                                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Username"
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Your email" />
                                            </div>
                                            <Field
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="password" value="Your password" />
                                            </div>
                                            <Field
                                                name="password"
                                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                id="password"
                                                type="password"
                                                placeholder="password"
                                            />
                                        </div>
                                        <div className="w-full mt-5">
                                            <Button type='submit'>Create your account</Button>
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Already have an account?&nbsp;
                                    <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500" onClick={toggleForm}>
                                        Log in
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={logoutModal} size="md" onClose={onCloseModal} popup>
                {/* Modal content for logout */}
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to logout?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="success" onClick={async () => {
                                console.log(localStorage.getItem('token'));
                                await axios.post(`${API_URL}logout`, {}, {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`
                                    }
                                }).then((result) => {
                                    console.log(result);
                                    localStorage.clear();
                                })
                                    .catch((err) => console.log(err));
                                // localStorage.removeItem("token");
                            }}>
                                Yes
                            </Button>
                            <Button color="failure" onClick={onCloseConfirmModal}>
                                No
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/logo.png" className="h-8" alt="Flowbite Logo" />
                        <span className="text-1xl font-extrabold tracking-tight leading-none text-white md:text-1xl lg:text-4xl">
                            <span className="text-sky-500">CAR</span>
                            <span className="text-blue-500 ms-3">BOOK</span>
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
                        <button
                            type="button"
                            onClick={() => setOpenModal(true)}
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => setLogoutModal(true)}
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Logout
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-black">About</a>
                            </li>
                            <li>
                                <a href="/service" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-black">Services</a>
                            </li>
                            <li>
                                <a href="/contactUs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-black">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Mnavbar;
