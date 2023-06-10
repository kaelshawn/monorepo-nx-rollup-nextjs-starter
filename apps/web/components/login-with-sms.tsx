import { useState } from "react";
import SendOTPForm from "./send-otp-form";
import VerifyOTPForm from "./verify-otp-form";

const LoginWithSMS = () => {
  const [otpSent, setOTPSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [methodId, setMethodId] = useState("");

  return (
    <div>
      {!otpSent ? (
        <SendOTPForm
          phoneNumber={phoneNumber}
          setMethodId={setMethodId}
          setOTPSent={setOTPSent}
          setPhoneNumber={setPhoneNumber}
        />
      ) : (
        <VerifyOTPForm methodId={methodId} phoneNumber={phoneNumber} />
      )}
    </div>
  );
};

export default LoginWithSMS;
