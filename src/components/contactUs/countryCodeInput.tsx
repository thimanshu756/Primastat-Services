import React, {  ChangeEvent } from 'react';


interface CountryCode {
    name: string;
    dial_code: string;
    code: string;
  }
interface CountryCodeInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  setSelectedCode: (code: string) => void;
  countryCodes: CountryCode[];
  selectedCode: string;
}

const CountryCodeInput: React.FC<CountryCodeInputProps> = ({ value, onChange, error, selectedCode, setSelectedCode , countryCodes}) => {

  const handleCodeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };

  return (
    <div className="flex flex-col mb-4 md:w-[48%]">
      <label className="my-2">Phone Number</label>
      <div className="flex">
        <select
          onChange={handleCodeChange}
          className="border border-gray-300 p-2 rounded-md"
          value={selectedCode}
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.dial_code}>
              {country.dial_code}
            </option>
          ))}
        </select>
        <input
          type="tel"
          name="phone"
          value={value}
          onChange={onChange}
          placeholder="Your Phone Number"
          required
          className="border border-gray-300 p-2 rounded-md flex-1 ml-2"
        />
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};

export default CountryCodeInput;
