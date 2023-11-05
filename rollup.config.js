/* eslint-disable @typescript-eslint/no-var-requires */
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom'];

process.env.BABEL_ENV = 'production';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourceMap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourceMap: true,
    },
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    peerDepsExternal(),
    resolve({ extensions }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: /node_modules/,
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
    }),
    commonjs({
      include: /node_modules/,
    }),
    image(),
    json(),
  ],
  external,
};
