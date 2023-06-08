import Image from "next/image";
import React from "react";
import styles from "./stytch-container.module.scss";
import lockup from "/public/powered-by-stytch.svg";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const StytchContainer = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <Image alt="Powered by Stytch" height={15} src={lockup} width={150} />
    </div>
  );
};

export default StytchContainer;
