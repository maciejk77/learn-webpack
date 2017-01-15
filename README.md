# Learning Webpack 2

## Module systems
- **CommonJS**, **AMD**, **ES2016** modules

## Running Webpack
- Running Webpack **globally** VS **locally** `npm install -g webpack` VS `npm run build`
- Global access only one existing version of webpack, each local may access different version of Webpack

## Babel npm packages
- **babel-loader** teaches Babel how to work with Webpack, 
- **babel-core** how to take, parse and generate output files, 
- **babel-preset-env** tells Bable which pieces of ES2015/6/7 to look for and how to turn to ES5 code 

## Refactoring CommonJS to ES6
- **Importing** `const sum = require('./sum');` to become `import sum from './sum';`
- **Exporting** `module.exports = sum;` to become `export default sum`;

## Handling CSS with Webpack
- Useful tip to generate fake images `http://lorempixel.com/400/400`
- **css-loader** knows how to deal with CSS imports
- **style-loader** takes CSS imports and adds them to HTML document
- **extract-text-webpack-plugin**

## Handling Images with Webpack
- *image-webpack-loader* compress image automatically (reduce file size)
- *url-loader* evaluates image size to include in bundle.js as raw data or put into output directory

