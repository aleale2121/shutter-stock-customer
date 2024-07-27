import { useState } from "react";
import OtpInput from "react-otp-input";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0",
  };

  const inputStyle = {
    inlineSize: "3rem",
    blockSize: "3rem",
    margin: "0 0.5rem",
    fontSize: "1.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    textAlign: "center",
    outline: "none",
    transition: "border 0.2s ease-in-out",
  };

  return (
    <OtpInput
      containerStyle={containerStyle}
      inputStyle={inputStyle}
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
}
