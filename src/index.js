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
            let copy = {...state};
            copy.feelings = feelings;
            console.log("Got our Feelings data:", copy);
            // return {...state, feelings: action.payload}
            return copy;
        case 'UNDERSTANDING':
            const understanding = action.payload;
            copy = {...state};
            copy.understanding = understanding;
            console.log("Got our Understands:", copy);
            return copy;
        case 'SUPPORT':
            const support = action.payload;
            copy = {...state};
            copy.support = support;
            console.log("Got our support numbers:", copy);
            return copy;
        case 'COMMENTS':
            const comments = action.payload;
            copy = {...state};
            copy.comments = comments;
            console.log("Got our comments:", copy)
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
