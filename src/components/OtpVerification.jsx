import { useState } from "react";
import "../styles/otp.css";


const OtpVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    try {
      const response = await fetch("https://your-backend.com/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
        setMessage("OTP sent successfully! Check your email.");
      } else {
        setMessage("Failed to send OTP. Try again.");
      }
    } catch (error) {
      setMessage("Error sending OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("https://your-backend.com/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("OTP verified! Access granted.");
      } else {
        setMessage("Invalid OTP. Try again.");
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    }
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
      {!otpSent ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
};

export default OtpVerification;
