import { BuildOptions } from "esbuild";

const baseBuildOptions: BuildOptions = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
};

export default baseBuildOptions;
