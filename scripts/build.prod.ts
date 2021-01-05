import * as esbuild from "esbuild";
import baseBuildOptions from "./baseBuildOptions";

const buildOptions: esbuild.BuildOptions = {
  ...baseBuildOptions,
  minify: true,
  outfile: "build/bundle.js",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
};

esbuild.buildSync(buildOptions);
