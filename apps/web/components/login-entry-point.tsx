import { Stytch, StytchProps } from "@stytch/stytch-react";
import { LoginMethod } from "models";
import { TabPanel, TabView } from "primereact/tabview";
import styles from "./login-entry-point.module.scss";
import LoginWithSMS from "./login-with-sms";
import StytchContainer from "./stytch-container";

type Props = {
  publicToken?: string;
};

const LoginEntryPoint = (props: Props & { stytchProps: StytchProps }) => {
  const { publicToken, stytchProps } = props;

  const loginMethodMap: Record<LoginMethod, React.ReactElement> = {
    [LoginMethod.API]: <LoginWithSMS />,
    [LoginMethod.SDK]: (
      <div className={styles.container}>
        <Stytch
          publicToken={publicToken || ""}
          loginOrSignupView={stytchProps.loginOrSignupView}
          style={stytchProps.style}
          callbacks={stytchProps.callbacks}
        />
      </div>
    ),
  };

  return (
    <StytchContainer>
      <TabView>
        <TabPanel header="短信登录">{loginMethodMap[LoginMethod.API]}</TabPanel>
        <TabPanel header="邮箱第三方登录">
          {loginMethodMap[LoginMethod.SDK]}
        </TabPanel>
      </TabView>
    </StytchContainer>
  );
};

export default LoginEntryPoint;
