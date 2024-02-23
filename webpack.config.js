import path, { dirname } from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  target: "node",
  entry: "./index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  externals: [nodeExternals()],
  externalsPresets: {
    node: true,
  },
  output: {
    filename: "bundle.cjs",
    path: path.resolve(__dirname, "dist"),
  },
};
