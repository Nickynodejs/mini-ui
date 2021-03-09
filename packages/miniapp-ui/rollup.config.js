import Path from 'path'
import RollupPluginNodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel';
import RollupPluginCommonjs from 'rollup-plugin-commonjs'
import RollupPluginTypescript from 'rollup-plugin-typescript2'
import RollupPluginJson from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import RollPostcssInject2Css from 'rollup-plugin-postcss-inject-to-css'
import RollupPluginImage from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import nested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
import Package from './package.json'
import path from "path";

const resolveFile = path => Path.resolve(__dirname, '.', path)
const externalPkg =  [
  'react',
  'style-inject',
  'react-dom',
  '@tarojs/taro',
  '@tarojs/react',
  '@tarojs/components',
  '@tarojs/runtime'
]
const external = id => externalPkg.some(e => id.indexOf(e) === 0)
const config = {

  //入口
  input: "src/index.ts",
  //出口
  output:
    {
      format: 'es',
      dir: "lib/es",
      preserveModules: true,
      preserveModulesRoot: 'src',
      assetFileNames: ({name}) => {
        console.log(name)
        const {ext, dir, base} = Path.parse(name);
        if (ext !== '.css') return '[name].[ext]';
        // 规范 style 的输出格式
        return Path.join(dir, 'style', base);
      }
    }
  ,
  //打包时剔除这些
  external,
  plugins: [
    RollupPluginImage(),
    postcss({
      inject: true,
      extensions: ['.css', 'less'],
    }),
    RollPostcssInject2Css({ exclude: /\/node_modules\//}),
    RollupPluginNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupPluginCommonjs(),
    RollupPluginJson(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: 'runtime'// 只编译源代码
    }),
    RollupPluginTypescript({
      tsconfig: resolveFile('./tsconfig.json')
    }),

    terser()
  ]
}

export default config
