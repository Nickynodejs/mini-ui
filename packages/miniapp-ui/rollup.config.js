import Path from "path";
import RollupPluginNodeResolve from "rollup-plugin-node-resolve";
import RollupPluginCommonjs from "rollup-plugin-commonjs";
import RollupPluginTypescript from "rollup-plugin-typescript2";
import RollupPluginJson from "@rollup/plugin-json"
import Package from "./package.json";

const resolveFile = (path) => Path.resolve(__dirname, ".", path);

const config = {
  //入口
  input: resolveFile(Package.source),
  //出口
  output: [
    {
      file: resolveFile(Package.main),
      format: "cjs",
      sourcemap: true,
    },
    {
      file: resolveFile(Package.module),
      format: "es",
      sourcemap: true,
    },
  ],
  //打包时剔除这些
  external: [
    "react",
    "react-dom",
    "@tarojs/taro",
    "@tarojs/react",
    "@tarojs/components",
    "@tarojs/runtime",
  ],
  plugins: [
    RollupPluginNodeResolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    RollupPluginCommonjs({
      include: /\/node_modules\//,
    }),
    RollupPluginJson(),
    RollupPluginTypescript({
      tsconfig: resolveFile("./tsconfig.json"),
    }),
  ],
};

export default config;
