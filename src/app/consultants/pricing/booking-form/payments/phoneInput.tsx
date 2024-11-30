"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select-country-list";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneInputField = () => {
  const [country, setCountry] = useState<string>("US");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [options, setOptions] = useState<any>([]);

  useEffect(() => {
    const countries = Select();
    setOptions(countries);
  }, []);

  const handleCountryChange = (e: any) => {
    setCountry(e.value);
  };

  const handlePhoneChange = (phone: string) => {
    setPhoneNumber(phone);
  };

  return (
    <div className="container max-w-4xl mx-auto p-6">
      <div className="mb-4">
        <Select
          options={options}
          onChange={handleCountryChange}
          value={country}
        />
      </div>

      <PhoneInput
        international
        defaultCountry={country}
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="w-full p-2 border-2 rounded-lg"
      />
    </div>
  );
};

export default PhoneInputField;
