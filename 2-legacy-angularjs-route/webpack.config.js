// Import the necessary modules
const path = require('path');  // Used to handle and transform file paths
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Plugin to generate an HTML file
const CopyPlugin = require('copy-webpack-plugin');  // Plugin to copy files from one location to another

module.exports = {
  // Entry point for your application
  entry: './src/main.ts',  // The entry file where Webpack will start bundling

  // Output configuration
  output: {
    filename: 'app.js',  // Name of the bundled output JavaScript file
    path: path.resolve(__dirname, 'dist'),  // Path where the bundled files will be saved
    clean: true  // Cleans the output folder (dist) before each build
  },

  // Module resolution settings
  resolve: {
    extensions: ['.ts', '.js']  // Automatically resolve these extensions for imports
  },

  // Module rules to handle different file types
  module: {
    rules: [
      {
        test: /\.ts$/,  // Matches all TypeScript files
        use: 'ts-loader',  // Uses ts-loader to compile TypeScript files
        exclude: /node_modules/  // Exclude node_modules folder to avoid unnecessary transpilation
      },
      {
        test: /\.css$/,  // Matches all CSS files
        use: ['style-loader', 'css-loader']  // Use style-loader to inject CSS into the DOM and css-loader to process CSS files
      },
      {
        test: /\.(png|jpe?g|gif)$/,  // Matches image files (PNG, JPEG, GIF)
        type: 'asset/resource'  // Handle image files as static assets and include them in the output
      }
    ]
  },

  // Plugins to enhance Webpack's functionality
  plugins: [
    // Generates an HTML file and injects the bundled JavaScript file
    new HtmlWebpackPlugin({
      template: './src/app/index.html'  // Path to the HTML template to be used as a base
    }),

    // Copies specific files from the source to the output directory
    new CopyPlugin({
      patterns: [
        // Copy all HTML files from the src/app folder (except index.html)
        { 
          from: '**/*.html',  // Glob pattern to match all HTML files
          to: '',  // Output them in the root of the dist folder
          context: 'src/app',  // Set the context to src/app to match the pattern from this directory
          globOptions: {
            ignore: ['index.html']  // Ignore index.html (don't copy it)
          }
        },
      ],
    }),
  ],

  // DevServer configuration for development environment 
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')  // Serve the output files from the dist folder
    },
    port: 8080,  // Set the development server to run on port 8080
    open: true,  // Automatically open the browser when the dev server starts
    historyApiFallback: true,  // Allow routing with history API without 404 errors
  },

  // Set the mode to development to enable debugging features
  mode: 'development'  // This configures Webpack for development mode (can also be set to 'production' for optimized builds)
};
