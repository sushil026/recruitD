import React, { useEffect, useRef, useState } from "react";

export default function OtpField({ length, onOtpSubmit = () => {} }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRef = useRef([]);
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  function handleChange(index, ev) {
    const val = ev.target.value;
    if (isNaN(val)) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = val.substring(val.length - 1);
    setOtp(newOtp);
    const collected = newOtp.join("");
    if (collected.length === length) {
      onOtpSubmit(collected);
    }
    if (val && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  }

  function handleClick(index) {
    inputRef.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRef.current[otp.indexOf("")].focus();
    }
  }

  function handleKeyDown(index, ev) {
    if (
      ev.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  }

  return (
    <div className={"flex w-full justify-center"}>
      {otp.map((value, index) => (
        <input
          className={"h-12 w-12 border rounded-lg mx-1 text-center"}
          ref={(input) => {
            inputRef.current[index] = input;
          }}
          type="text"
          key={index}
          value={value}
          onChange={(ev) => handleChange(index, ev)}
          onClick={() => handleClick(index)}
          onKeyDown={(ev) => handleKeyDown(index, ev)}
        />
      ))}
    </div>
  );
}
