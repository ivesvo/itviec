import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const initialState = {
    user: { email: '', password: '', isAuthenticated: false }
}

function reducer (state=initialState, action){
    if(action.type === 'LOGIN'){
        console.log("HAHAHAHHA")
      state.user = action.payload
      state.user.isAuthenticated = true;
    }
    
    if (action.type === 'LOGOUT'){
    state.user = { email: '', password: '', isAuthenticated: false }
    }

    return state
  
  }

const store = createStore(reducer)
export default store