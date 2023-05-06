import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// i choose you REDUX! 
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// reducer
const feedback = (state={}, action) => {
    switch (action.type) {
        case 'FEELINGS':
            return {...state, feelings: action.payload}
        case 'UNDERSTANDING':
            return {...state, understanding: action.payload}
        case 'SUPPORT':
            return {...state, support: action.payload}
        case 'COMMENTS':
            return {...state, comments: action.payload}
        case 'RESET':
            // Once user submits feedback, and then clicks Leave New Feedback button, reset state data vvvv
            return {...state, feelings:'', understanding:'', support:'', comments:''}
        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(
        logger
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
