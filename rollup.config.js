import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import path from "path";

const cwd = process.cwd();
const pkg = require(`${cwd}/package.json`);

export default {
  input: require.resolve(path.resolve(cwd, "src")),

  output: [
    {
      file: path.resolve(cwd, pkg.main),
      format: "cjs"
    },

    pkg.module && {
      file: path.resolve(cwd, pkg.module),
      format: "es"
    }
  ].filter(Boolean),

  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {})
  ],

  plugins: [resolve(), babel()]
};
