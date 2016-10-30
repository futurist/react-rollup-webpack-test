# React Rollup & Webpack Test

This is just a skeleton react app for bundler tests and comparison.

## Usage

Terminal commands:

- Rollup build (located in `build/rollup.js`):

```sh
npm run build:rollup
```

- Webpack build (located in `build/webpack.js`):

```sh
npm run build:webpack
```

- both builds

```sh
npm run build
```

## Current status

Bundle size (skeleton & with unused `Link` from `react-router` package):

| Bundler | Version | Contents | Size |
| --- | --- | --- | --- |
| rollup | 0.36.3 | react 15.3.2 | 137 kb |
| rollup | 0.36.3 | react 15.3.2 + router 3.0.0 | 177 kb |
| webpack | 2.1.0-beta.25 | react 15.3.2  | 147 kb |
| webpack | 2.1.0-beta.25 | react 15.3.2 + router 3.0.0 | 197 kb |

- Rollup bundle file is 10kb / 20kb less.
- React-router needs a config fix with rollup.
  - Current fix is to specify namedExports - [link](https://github.com/rollup/rollup/issues/855).
- Tree shaking is under a question
- There are [uglify warnings](uglify-warnings) if `warnings: true` option is set in the config file.
