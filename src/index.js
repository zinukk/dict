import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
// import { combineReducers, createStore } from 'redux';
import store from "./redux/configStore"


// let alert = 'true'

// function reducer2(state = alert, action){
//   if(action.type === '닫아'){
//     state = false

//     return state
//   }else{
//     return state
//   }
// }





// let 초기값 = [
//   {name : '신발수량', quan : 1 }
// ]

// function reducer( state = 초기값, 액션) {

//   if(액션.type === '수량증가'){
//     let newState = [...state];
//     newState[0].quan++

//     return newState
//   }else if(액션.type === '수량감소'){
//     let newState = [...state];
//     newState[0].quan--

//     return newState
//   }else{
//     return state
//   }

// }

// let store = createStore(combineReducers({reducer,reducer2}));


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
