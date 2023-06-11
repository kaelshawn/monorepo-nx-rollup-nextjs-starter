import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
      plugins: [autoprefixer()],
    }),
    typescript(),
  ],
};
