# Woopra React

Woopra wrapper for React

# Install

Use npm:

```shell
npm install @animalresearch/woopra-react
```

# Usage

Import the component into your `index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WoopraTracker from '@animalresearch/woopra-react';

ReactDOM.render([
  <WoopraTracker config={{
    domain: 'example.com'
  }} />,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
], document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```