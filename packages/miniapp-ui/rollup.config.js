import Path from 'path'
import RollupPluginNodeResolve from 'rollup-plugin-node-resolve'
import RollupPluginCommonjs from 'rollup-plugin-commonjs'
import RollupPluginTypescript from 'rollup-plugin-typescript2'
import RollupPluginJson from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import RollupPluginImage from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import nested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
import Package from './package.json'

const resolveFile = path => Path.resolve(__dirname, '.', path)
const extensions = ['.js', '.jsx', '.ts', '.tsx', 'css', '.less']
const config = {
  //入口
  input: resolveFile(Package.source),
  //出口
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true
    }
  ],
  //打包时剔除这些
  external: [
    'react',
    'react-dom',
    '@tarojs/taro',
    '@tarojs/react',
    '@tarojs/components',
    '@tarojs/runtime'
  ],
  plugins: [
    RollupPluginImage(),
    postcss({
      plugins: [nested(), postcssPresetEnv(), cssnano()],
      modules: false,
      extensions: ['.css', '.less'],
      use: [
        [
          'less',
          {
            javascriptEnabled: true
          }
        ]
      ],
      inject: true
    }),
    RollupPluginNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      },
      extensions
    }),
    RollupPluginCommonjs({
      include: /\/node_modules\//
    }),
    RollupPluginJson(),
    RollupPluginTypescript({
      tsconfig: resolveFile('./tsconfig.json')
    }),
    terser()
  ]
}

export default config
