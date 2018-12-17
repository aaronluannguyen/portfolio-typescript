import * as React from 'react';
import * as ReactDOM from 'react-dom';
declare let module: any
import { Hello } from './components/Hello';
ReactDOM.render(
  <Hello compiler="Typescript" framework="React" bundler="Webpack" />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}