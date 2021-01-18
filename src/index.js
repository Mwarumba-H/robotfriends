import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Card from './Card'; not needed in this file now used in the CardList file after creation of CardList
//CardList componet is the paraent to Card componet
// import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';


ReactDOM.render(<App />,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
