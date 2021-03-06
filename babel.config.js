module.exports = function (api) {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production')
  var isTestEnv = api.env('test')
  var corejsVersion = '3.2'

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        '.'
    )
  }

  return {
    presets: [
      isTestEnv && [
        require('@babel/preset-env').default,
        {
          useBuiltIns: 'usage',
          corejs: corejsVersion,
          targets: {
            node: 'current',
          },
        },
      ],
      (isProductionEnv || isDevelopmentEnv) && [
        require('@babel/preset-env').default,
        {
          useBuiltIns: 'usage',
          corejs: corejsVersion,
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          modules: false,
          exclude: ['transform-typeof-symbol'],
          targets: {
            browsers: [
              '> 1%',
              'last 2 firefox versions',
              'last 2 chrome versions',
              'last 2 safari versions',
              'edge 15-16',
              'ie 11',
            ],
          },
        },
      ],
      [
        require('@babel/preset-react').default,
        {
          development: isDevelopmentEnv || isTestEnv,
          useBuiltIns: true,
        },
      ],
    ].filter(Boolean),
    plugins: [
      require('babel-plugin-macros'),
      require('@babel/plugin-syntax-dynamic-import').default,
      isTestEnv && require('babel-plugin-dynamic-import-node'),
      require('@babel/plugin-transform-destructuring').default,
      require('@babel/plugin-proposal-optional-chaining').default,
      require('@babel/plugin-proposal-nullish-coalescing-operator').default,
      [
        require('@babel/plugin-proposal-class-properties').default,
        {
          loose: true,
        },
      ],
      [
        require('@babel/plugin-proposal-object-rest-spread').default,
        {
          useBuiltIns: true,
        },
      ],
      [
        require('@babel/plugin-transform-runtime').default,
        {
          helpers: false,
          regenerator: true,
        },
      ],
      [
        require('@babel/plugin-transform-regenerator').default,
        {
          async: false,
        },
      ],
      isProductionEnv && [
        require('babel-plugin-transform-react-remove-prop-types').default,
        {
          removeImport: true,
        },
      ],
      isProductionEnv && require('babel-plugin-lodash').default,
      [
        require('babel-plugin-styled-components').default,
        { displayName: !isProductionEnv },
      ],
      [
        require('babel-plugin-module-resolver').default,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '~stylesheets': './app/assets/stylesheets',
            '~images': './app/assets/images',
            '~mocks': './__tests__/__mocks__',
            '~fonts': './app/assets/fonts',
            '^~(.+)': './app/javascript/src/\\1',
          },
        },
      ],
      require('react-hot-loader/babel').default,
    ].filter(Boolean),
  }
}
