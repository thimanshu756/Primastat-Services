import React, { useState, ChangeEvent  } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to an API
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[60vw]  flex-1 mx-auto p-8 space-y-4  flex-1 text-black"
    >
      <div className="flex flex-col md:flex-row md:space-x-4">
        <span className="flex-1">
          <p className="my-2">First Name</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
        </span>

        <span className="flex-1">
          <p className="my-2">Last Name</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <span className="flex-1">
          <p className="my-2">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address*"
            required
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
        </span>

        <span className="flex-1">
          <p className="my-2">Company</p>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Name*"
            required
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <span className="flex-1">
          <p className="my-2">Phone Number</p>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Email Address*"
            required
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
        </span>

        <span className="flex-1">
          <p className="my-2">Reason of Contact*</p>
          <input
            type="reason"
            name="company"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason of Contact*"
            required
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <span className="w-[100%] ">
          <p className="my-2">Your Message</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          ></textarea>
        </span>
      </div>
      {/* Insert reCAPTCHA component here */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
      >
        Submit
      </button>
    </form>
  );
}
