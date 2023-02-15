import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const message = "Hiiiiiiii"
const message1 = <h2>Helllooooooo</h2>

const arr = ['Apple', 'Orange', 'Apple', 'Banana', 'pineaplle', 'Apple']
const app = arr.filter(fruit => fruit == 'Apple')
// const appp = arr.find(fruitt => fruitt == 'Apple')

root.render(
  <div>
     <App/>
  </div>
   
);