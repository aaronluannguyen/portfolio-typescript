import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './App.css';
import {Navbar} from './Navbar/Navbar';

declare let module: any;


interface IProps {}
class App extends React.Component<IProps, {}> {
  render() {
    return <div className={""}>

      <Navbar/>
    </div>
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}