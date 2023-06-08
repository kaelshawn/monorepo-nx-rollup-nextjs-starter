import { LoginMethod } from "models";
import { Button } from "primereact/button";
import styles from "./login-entry-point.module.scss";
import StytchContainer from "./stytch-container";

type Props = {
  setLoginMethod: (loginMethod: LoginMethod) => void;
};

const LoginEntryPoint = (props: Props) => {
  const { setLoginMethod } = props;
  return (
    <StytchContainer>
      <h2>Hello!</h2>
      <p className={styles.entrySubHeader}>登录试用</p>
      <Button
        className={styles.entryButton}
        onClick={() => setLoginMethod(LoginMethod.SDK)}
      >
        SDK Integration (Email magic links)
      </Button>
      <Button
        className={styles.entryButton}
        onClick={() => setLoginMethod(LoginMethod.API)}
      >
        API Integration (SMS Passcodes)
      </Button>
    </StytchContainer>
  );
};

export default LoginEntryPoint;
