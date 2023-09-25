import React from "react";

const ContactCard = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 md:p-16 max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-800 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
