import { GetStaticProps } from "next";
import Another from "./another";
import Another2 from "./another-2";

const Test = () => {
  return (
    <div>
      <Another></Another>
      <Another2></Another2>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default Test;
