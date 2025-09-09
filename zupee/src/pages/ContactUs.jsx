import React from 'react'
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <>
            {/* Top breadcrumb */}
            <div className="text-sm p-4 sm:p-5" style={{ backgroundColor: "#f0f3fc" }}>
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <Link to="/" className="font-semibold text-purple-700">
                        Home
                    </Link>{" "}
                    &gt; <span>Contact Us</span>
                </div>
            </div>

            {/* Main Intro Section */}
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-purple-900 text-center mb-4 sm:mb-6 uppercase leading-snug">
                    Zupee Customer Support: Reach Out, We’re Here To Help
                </h1>

                {/* Sub Text */}
                <p className="max-w-6xl mx-auto  text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 px-2">
                    Welcome to Zupee's Contact Us Hub - a place where your voice matters. At
                    Zupee, your feedback, inquiries, and suggestions are invaluable to us.
                    We're dedicated to providing you with comprehensive assistance and
                    listening to your needs.
                </p>

                {/* Second Heading */}
                <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold italic text-purple-900 text-center mb-4 sm:mb-6 uppercase leading-snug">
                    Connect with Zupee’s Customer Care
                </h2>

                {/* Second Text */}
                <p className="max-w-6xl mx-auto  text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2">
                    We are committed to addressing your queries promptly. Please fill in the
                    details below to reach out to us. Our team will ensure your concerns are
                    addressed effectively:
                </p>
            </div>

            {/* Contact Form */}
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12">
                {/* Heading */}
                <div className="flex justify-center md:justify-around max-w-[90%] md:max-w-[75%] mx-auto opacity-80">
                    <h3 className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-center md:text-left">
                        For any kind of queries, please write to us below
                    </h3>
                </div>

                {/* Form */}
                <form className="max-w-3xl mx-auto space-y-4 sm:space-y-5 px-2">
                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Name*"
                        required
                        className="w-full p-2 sm:p-3 rounded-md bg-indigo-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    />

                    {/* Phone */}
                    <input
                        type="tel"
                        placeholder="Phone Number*"
                        required
                        className="w-full p-2 sm:p-3 rounded-md bg-indigo-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 sm:p-3 rounded-md bg-indigo-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    />

                    {/* Subject */}
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-2 sm:p-3 rounded-md bg-indigo-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    />

                    {/* Query */}
                    <textarea
                        placeholder="Write your query (minimum 20 characters)*"
                        rows="5"
                        required
                        className="w-full p-2 sm:p-3 rounded-md bg-indigo-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    ></textarea>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md transition duration-300 text-sm sm:text-base"
                        >
                            Send Your Query!
                        </button>
                    </div>
                </form>
            </div>

            {/* Email Support & Office Address Section */}
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10 sm:py-12 space-y-12 sm:space-y-16">
                {/* Email Support */}
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-800 mb-4 sm:mb-6 italic uppercase">
                        EMAIL ZUPEE SUPPORT
                    </h2>
                    <div className="max-w-5xl mx-auto text-gray-900 text-left space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                        <p>
                            Have something specific to discuss? Feel free to drop us an email at{" "}
                            <a
                                href="mailto:care@zupee.com"
                                className="font-bold text-purple-800 hover:underline"
                            >
                                care@zupee.com
                            </a>. Our inbox is open to assist you with any queries or feedback you might have.
                        </p>
                        <p>
                            We strive to provide prompt and meaningful assistance, aiming to enhance your experience on Zupee.
                            Your input is instrumental in shaping our platform and services.
                        </p>
                        <p>
                            Thank you for choosing Zupee. We eagerly anticipate connecting with you and ensuring your
                            experience with us is nothing short of excellent!
                        </p>
                    </div>
                </div>

                {/* Office Address */}
                <div className="">
                    <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-800 mb-4 sm:mb-6 italic uppercase">
                        OFFICE ADDRESS
                    </h2>
                    <p className="max-w-5xl mx-auto text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                        Apeejay Business Centre, 6th Floor, Arunachal Building, Barakhamba Road, Connaught Place,
                        New Delhi 110001, India (CIN: U72900DL2019PTC418467).
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactUs
