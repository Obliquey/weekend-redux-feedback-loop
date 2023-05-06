import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// i choose you REDUX! 
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// reducer(s)
const feedback = (state={}, action) => {
    switch (action.type) {
        case 'FEELINGS':
            const feelings = action.payload;
            let copy = [...state]
            copy.feelings = feelings;
            return copy;
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
