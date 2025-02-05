// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your component
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-react-component.js', // Output file name
    library: 'MyComponent', // Global variable name for your component
    libraryTarget: 'umd', // Universal Module Definition (works for CommonJS, AMD, and as a global variable)
    globalObject: 'this', // Ensures compatibility with both browser and Node.js
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allows importing files without specifying extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Optional: For testing your component
    }),
  ],
  externals: {
    // Externalize React and React DOM to avoid bundling them
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};