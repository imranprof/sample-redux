import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from "./store";
import Count from "./components/Count";
import Control from "./components/Control";
import Clicked from "./components/Clicked";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>This is Redux simple app</h1>
        <Count />
        <Control />
        <Clicked />
      </div>
    </Provider>
  );
}

export default App;
