import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuizProvider } from './context/QuizProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Puntaje from './components/Puntaje.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
  <QuizProvider>
<Routes>


  <Route path='/' element={<App />}>  
  </Route  >
  <Route path='/score' element={<Puntaje />}>  
  </Route  >



    </Routes>
    </QuizProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
