import React from 'react';
import Home from './views/Home/Home';
import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
