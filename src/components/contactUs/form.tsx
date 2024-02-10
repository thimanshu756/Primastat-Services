import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

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

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [disabled,setDisabled] = useState(false);
  const [loading,setLoading]=useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required.";
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required.";
    } else {
      newErrors.lastName = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    } else {
      newErrors.email = "";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10 digits).";
    } else {
      newErrors.phone = "";
    }

    if (formData.reason.trim() === "") {
      newErrors.reason = "Reason of Contact is required.";
    } else {
      newErrors.reason = "";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {

      try {
        setLoading(true);

        // Convert formData object to FormData for sending
        const formToSend = new FormData();
        for (const key in formData) {
          formToSend.append(key, formData[key]);
        }

        // Note: Removed debugger for cleaner code
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbxsO-w_FnAusfhuMSZkcxH8tVxfKaFNl4HPwxdqFHhv7gVH4yIn6jRM0-wXiZaLztUIIg/exec',
          {
            method: 'POST',
            body: formToSend, // Send as FormData
            // Headers are not needed for FormData as the browser sets the correct Content-Type
          }
        );

        if (response.ok) {

          alert("form submitted")
          setDisabled(true);
          // Clear the form data upon successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            reason: "",
            message: "",
          });
          // Optionally, display a success message to the user
        } else {
          // Handle server errors or invalid responses
          console.error("Server error:", response.statusText);
          // Optionally, display an error message to the user
        }
      } catch (error) {
        // Handle API errors here
        console.error("API error:", error);
        // Optionally, display an error message to the user
      }finally{
        setLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[60vw]  flex-1 mx-auto p-8 md:space-y-4  flex-1 text-black"
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
          <div className="error-message">{errors.lastName}</div>
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
          <div className="error-message">{errors.lastName}</div>
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
          <div className="error-message">{errors.email}</div>
        </span>
        <span className="flex-1">
          <p className="my-2">Company</p>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Name*"
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
            placeholder="Your Phone Number*"
            required
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
          <div className="error-message">{errors.phone}</div>
        </span>
        <span className="flex-1">
          <p className="my-2">Reason of Contact*</p>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason of Contact*"
            required
            className="border border-gray-300 p-2 rounded-md w-[100%]"
          />
          <div className="error-message">{errors.reason}</div>
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <span className="w-[100%]">
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
      disabled={disabled}
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-8"
      >
        {loading?"Loading":"Submit"}
      </button>
    </form>
  );
}
