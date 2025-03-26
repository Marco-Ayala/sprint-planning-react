import React from 'react';
import Gallery from './components/Gallery';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Rompecabezas y Modelos a Escala</h1>
        <Gallery />
      </div>
    </Provider>
  );
}

export default App;
