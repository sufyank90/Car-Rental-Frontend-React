import React, { useRef } from 'react';
import Mnavbar from '../components/Mnavbar';
import Footer from '../components/Footer';
import { Field, Form, Formik } from 'formik';
import { Label } from 'flowbite-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function ContactUs() {
  const formRef = useRef();

  return (
    <>
      <Mnavbar />
      <div className="mt-32">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a href="mailto:example@email.com" className="text-red-500 leading-relaxed">example@email.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                onSubmit={async (values, { resetForm }) => {
                  console.log(values);
                  try {
                    const result = await emailjs.sendForm(
                      'service_fb3xhh9',
                      'template_1wox7o8',
                      formRef.current,
                      'bFnjs1Dbpzqq4_vYt'
                    );
                    console.log(result.text);
                    toast.success("Submitted Successfully")
                    resetForm();
                  } catch (error) {
                    console.error(error.text);
                    alert("Message failed to send.");
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form ref={formRef} className="relative mb-4 text-left">
                    <Label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</Label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <Label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</Label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <Label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</Label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                    <button
                      type="submit"
                      className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mb-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                  </Form>
                )}
              </Formik>
              <a
                href="https://veilmail.io/e/FkKh7o"
                className="font-medium text-blue-600 hover:underline"
              >
                Or click here to reveal our protected email address
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
