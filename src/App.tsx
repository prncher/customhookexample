import React from 'react';
import './App.css';
import ProductsApp from './ProductsApp';
import StylesProvider from './styles';

function App() {
  return <StylesProvider><ProductsApp /></StylesProvider>
}

export default App;
