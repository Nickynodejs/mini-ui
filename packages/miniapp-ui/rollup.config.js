import path from 'path'
import fs from 'fs'
import RollupPluginNodeResolve from 'rollup-plugin-node-resolve'
import RollupPluginBabel from 'rollup-plugin-babel'
import RollupPluginCommonjs from 'rollup-plugin-commonjs'
import RollupPluginTypescript from 'rollup-plugin-typescript2'
import RollupPluginJson from '@rollup/plugin-json'
import RollupPluginImage from '@rollup/plugin-image'
import RollupPluginStyles from 'rollup-plugin-styles'
import RollupPluginCopy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'

const componentDir = 'src/components'
const cModuleNames = fs.readdirSync(path.resolve(componentDir))
const componentEntryFiles = cModuleNames
  .map(name =>
    /^[A-Z]\w*/.test(name) ? `${componentDir}/${name}/index.tsx` : undefined
  )
  .filter(n => !!n)
const resolveFile = p => path.resolve(__dirname, '.', p)
const externalPkg = [
  'react',
  'clsx',
  'tslib',
  'react-dom',
  '@tarojs/taro',
  '@tarojs/react',
  '@tarojs/components',
  '@tarojs/runtime'
]
const external = id => externalPkg.some(e => id.indexOf(e) === 0)
const config = {
  //入口
  input: ['src/components/index.ts', ...componentEntryFiles],
  //出口
  output: {
    format: 'es',
    dir: 'lib',
    preserveModules: true,
    preserveModulesRoot: 'src/components',
    assetFileNames: ({ name }) => {
      console.log(name)
      const { ext, dir, base } = path.parse(name)
      if (ext !== '.css') return '[name].[ext]'
      // 规范 style 的输出格式
      return path.join(dir, 'styles', base)
    }
  },
  preserveModules: true,
  //打包时剔除这些
  external,
  plugins: [
    RollupPluginImage(),
    RollupPluginStyles({
      mode: 'extract',
      less: { javascriptEnabled: true },
      extensions: ['.less', '.css'],
      minimize: false,
      use: ['less'],
      url: {
        inline: true
      },
      sourceMap: true,
      onExtract(data) {
        const { css, name, map } = data
        const { base } = path.parse(name)
        if (base !== 'index.css') return false
        return true
      }
    }),
    // 引入依赖
    RollupPluginNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    // CommonJS转换
    RollupPluginCommonjs(),
    // 调用外部json
    RollupPluginJson(),
    // 生成声明文件
    RollupPluginTypescript({
      tsconfig: resolveFile('./tsconfig.json'),
      useTsconfigDeclarationDir: false
    }),
    // balel
    RollupPluginBabel({
      exclude: 'node_modules/**',
      runtimeHelpers: 'runtime' // 只编译源代码
    }),
    // 复制重命名
    RollupPluginCopy({
      targets: [
        {
          src: 'src/components/style',
          dest: 'lib',
          rename: 'theme'
        }
      ]
    }),
    // 压缩
    terser()
  ]
}

export default config
