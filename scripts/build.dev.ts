import * as esbuild from "esbuild";
import baseBuildOptions from "./baseBuildOptions";

const buildOptions: esbuild.BuildOptions = {
  ...baseBuildOptions,
  outfile: "dist/bundle.js",
  define: {
    "process.env.NODE_ENV": '"development"',
  },
};

esbuild.buildSync(buildOptions);
