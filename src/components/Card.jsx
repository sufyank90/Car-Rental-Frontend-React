import React, { useState, useEffect } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import axios from 'axios';
import '../style/style.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const SkeletonLoader = () => (
  <div role="status" className="max-w-sm mx-auto p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
      <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
      </svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-center mt-4">
      <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
      <div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

function Card() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingHistory, setBookingHistory] = useState([]);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        setData(result.data.products);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
    setIsLogin(true);
  }

  function onCloseConfirmModal() {
    setOpenConfirmModal(false);
  }

  function toggleForm() {
    setIsLogin(!isLogin);
  }

  function handleBookNow() {
    setOpenConfirmModal(true);
  }

  function handleReadMore(item) {
    setSelectedItem(item);
    setOpenModal(true);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleConfirmBooking = () => {
    if (selectedItem) {
      const newBookingHistory = [...bookingHistory, selectedItem];
      setBookingHistory(newBookingHistory);
      navigate('/booking-history', { state: { bookingHistory: newBookingHistory } });
    }
    setOpenConfirmModal(false);
  };

  return (
    <>
      {loading ? (
        <div className="container mx-auto px-4 md:px-8 lg:px-32 mb-5">
          <div className="flex justify-center flex-wrap">
            {[...Array(4).keys()].map((index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 md:px-8 lg:px-32 mb-7">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden text-left flex flex-col shadow-lg transition duration-300 transform hover:scale-105"
              >
                <img className="w-full h-48 object-cover" src={item.images[0]} alt="Card image" />
                <div className="p-4 flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="mt-2 text-gray-600">
                    {item.description.length > 100 ? (
                      <>
                        {item.description.slice(0, 100)}...{' '}
                        <button
                          className="text-blue-500"
                          onClick={() => handleReadMore(item)}
                        >
                          Read More
                        </button>
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
                <div className="p-4">
                  <button
                    onClick={() => handleReadMore(item)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full text-center"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col items-center mt-6 mb-6">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstItem + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{Math.min(indexOfLastItem, data.length)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={handlePrevPage}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>

      <Modal show={openModal} size="2xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            {selectedItem && (
              <>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img className="w-full h-80 object-cover" src={selectedItem.images[0]} alt="Card image" />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{selectedItem.title}</h2>
                    <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Price</h2>
                    <p className="text-gray-600 mb-4">${selectedItem.price}</p>
                    <div className="flex justify-center items-center w-full border-t border-gray-300 pt-4">
                      <button
                        onClick={handleBookNow}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={openConfirmModal} size="md" onClose={onCloseConfirmModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to book this car?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="success" onClick={handleConfirmBooking}>
                Yes
              </Button>
              <Button color="failure" onClick={onCloseConfirmModal}>
                No
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Card;
