import typescript from "@rollup/plugin-typescript";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [typescript()],
};
