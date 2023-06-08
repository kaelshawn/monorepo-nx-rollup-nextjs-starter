import { useState } from "react";
import SendOTPForm from "./send-otp-form";
import StytchContainer from "./stytch-container";
import VerifyOTPForm from "./verify-otp-form";

const LoginWithSMS = () => {
  const [otpSent, setOTPSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [methodId, setMethodId] = useState("");

  return (
    <StytchContainer>
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
    </StytchContainer>
  );
};

export default LoginWithSMS;
