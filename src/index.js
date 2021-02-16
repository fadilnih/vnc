import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import Terminal from "./components/Terminal"

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div>
    <Terminal />
  </div>
);

render(<App />, document.getElementById('root'));
