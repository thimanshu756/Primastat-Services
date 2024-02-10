import React, { useState, ChangeEvent, FormEvent } from "react";
import CountryCodeInput from "./countryCodeInput";
import ReCAPTCHA from 'react-google-recaptcha';

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

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };
  const [disabled,setDisabled] = useState(false);
  const [loading,setLoading]=useState(false);

  interface CountryCode {
    name: string;
    dial_code: string;
    code: string;
  }
  
  const countryCodes: CountryCode[] = [
    { name: 'India', dial_code: '+91', code: 'IN' },
    { name: 'United States', dial_code: '+1', code: 'US' },
    { name: 'Canada', dial_code: '+1', code: 'CA' },
    { name: 'Australia', dial_code: '+61', code: 'AU' },
    { name: 'United Kingdom', dial_code: '+44', code: 'GB' },
    { name: 'China', dial_code: '+86', code: 'CN' },
    { name: 'Japan', dial_code: '+81', code: 'JP' },
    { name: 'Germany', dial_code: '+49', code: 'DE' },
    { name: 'France', dial_code: '+33', code: 'FR' },
    { name: 'Italy', dial_code: '+39', code: 'IT' },
    { name: 'Spain', dial_code: '+34', code: 'ES' },
    { name: 'South Africa', dial_code: '+27', code: 'ZA' },
    { name: 'Brazil', dial_code: '+55', code: 'BR' },
    { name: 'Russia', dial_code: '+7', code: 'RU' },
    { name: 'Mexico', dial_code: '+52', code: 'MX' },
    { name: 'South Korea', dial_code: '+82', code: 'KR' },
    { name: 'Turkey', dial_code: '+90', code: 'TR' },
    { name: 'Netherlands', dial_code: '+31', code: 'NL' },
    { name: 'Sweden', dial_code: '+46', code: 'SE' },
    { name: 'Norway', dial_code: '+47', code: 'NO' },
    { name: 'Denmark', dial_code: '+45', code: 'DK' },
    { name: 'Finland', dial_code: '+358', code: 'FI' },
    { name: 'Belgium', dial_code: '+32', code: 'BE' },
    { name: 'Poland', dial_code: '+48', code: 'PL' },
    { name: 'Switzerland', dial_code: '+41', code: 'CH' },
    { name: 'New Zealand', dial_code: '+64', code: 'NZ' },
    { name: 'Argentina', dial_code: '+54', code: 'AR' },
    { name: 'Chile', dial_code: '+56', code: 'CL' },
    { name: 'Colombia', dial_code: '+57', code: 'CO' },
    { name: 'Egypt', dial_code: '+20', code: 'EG' },
    { name: 'Nigeria', dial_code: '+234', code: 'NG' },
    { name: 'Kenya', dial_code: '+254', code: 'KE' },
    { name: 'UAE', dial_code: '+971', code: 'AE' },
    { name: 'Saudi Arabia', dial_code: '+966', code: 'SA' },
    // Add more countries as needed
  ];
  
  const [selectedCode, setSelectedCode] = useState<string>(countryCodes[0].dial_code);

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
    if (!captchaValue) {
      alert('Please solve the CAPTCHA');
      return;
    }
    if(loading) return;
    if (validateForm()) {

      try {
        setLoading(true);

        // Convert formData object to FormData for sending
        const formToSend = new FormData();
        for (const key in formData) {
          if (key === 'phone') {
            // Combine selectedCode with phone number for the 'phone' key
            const fullPhoneNumber = `${selectedCode} ${formData[key]}`;
            formToSend.append(key, fullPhoneNumber);
          } else {
            // For all other keys, append them as they are
            formToSend.append(key, formData[key] );
          }
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
      <CountryCodeInput
      selectedCode={selectedCode}   countryCodes={ countryCodes} setSelectedCode={ setSelectedCode}
  value={formData.phone}
  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
  error={errors.phone}
/>
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
      <ReCAPTCHA
        sitekey="6Lc7Z24pAAAAAH88ke5hzyAs3N19xAcdtxUtAof" // Replace "YOUR_SITE_KEY_HERE" with your actual site key
        onChange={handleCaptchaChange}
      />
      <button
      disabled={disabled}
        type="submit"
        className={`${disabled?"bg-gray-700 cursor-disable":"bg-blue-500"}  ${loading?" cursor-disable":"Submit"} text-white py-2 px-4 rounded-md w-full mt-8}`}
      >
        {loading?"Loading":"Submit"}
      </button>
    </form>
  );
}
