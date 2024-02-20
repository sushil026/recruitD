import React, { useState } from "react";
import OtpField from "../utils/OtpField";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState();
  

  function handleEmailSubmit(e){
      e.preventDefault();
      console.log("first")
      setOtpSent(true);
  };

  function sharedOTP(otp) {
    setOtp(otp)
  }
  function handleOtp(e){
    e.preventDefault();
    console.log("Success "+ otp)
  }

  return (
    <div className={"h-screen flex items-center justify-center bg-light_green-400"}>
      <div className={" w-1/4 bg-emerald-700 p-6 rounded-2xl"}>
        <h1 className={"text-2xl font-pathway font-bold bold text-white mb-4"}>Sign up for free &#x1F91D;</h1>
        {otpSent ? (
          <form onSubmit={handleOtp}>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="otp">
                OTP sent to {email}:
              </label>
              <OtpField length={5} onOtpSubmit={sharedOTP}/>
            </div>
            <button
              type="submit"
              className="bg-aquamarine-400 font-extrabold text-white w-full p-2 rounded-md hover:bg-aquamarine-300"
            >
              Verify OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-2xl"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-aquamarine-400 font-extrabold text-white w-full p-2 rounded-md hover:bg-aquamarine-300"
            >
              Get OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
