# react-redux-boilerplate
### Minimalist approach framework for React + Redux app
This is primarily used to spin up my personal projects where I would use React + Redux framework.
Only includes bare minimum + commonly used libraries. Ie. Doesn't include react-router for projects
that may not require them. 

# Requirements
Node.js ^8.9.0

# Usage
```
To lint code:
$ npm run lint

To run development instance:
$ npm run dev

To test:
npm test

To start:
npm start
```

# Development stack
### View library: React
version ^16.0.0 [Docs](https://reactjs.org/docs)
### State management: Redux
version ^3.7.0 [Docs](https://redux.js.org/api-reference)
Uses redux-thunk for middleware.
Uses redux-devtools-extension for state debugging. version ^2.13.0 [Docs](https://github.com/zalmoxisus/redux-devtools-extension)
### App bundler: Webpack
version ^3.0.0 [Docs](https://webpack.js.org/api/)
Uses css modules to bundle css.
Uses Babel to transpile down to ES5. version ^7.0.0 [Docs](https://babeljs.io/)
### Hot reloading
Uses webpack-dev-server to handle hot reloading in development. version ^2.9.0 [Docs](https://github.com/webpack/webpack-dev-server)

# Testing
### Test driver: Jest
version ^22.4.0 [Docs](https://facebook.github.io/jest/)
### React component testing: Enzyme
version ^3.3.0 [Docs](http://airbnb.io/enzyme/docs/api/)

# Linting
### Linter: Eslint
version ^4.0.0. [Docs](https://eslint.org/)
Config file: .eslintrc