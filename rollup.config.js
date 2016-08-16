import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'app/index.js',
  dest: 'build/rollup.js',
  format: 'iife',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
}
