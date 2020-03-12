import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import CounterReducer from './Store/Reducers/CounterReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputReducer from './Store/Reducers/InputReducer';
import TodoReducer from './Store/Reducers/TodoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    counterReducer: CounterReducer,
    inputReducer: InputReducer,
    todoReducer: TodoReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)