import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { app } from './reducers/app';

const store = createStore(
    app,
    composeWithDevTools(applyMiddleware(thunk))
);

// store.subscribe(() => console.info('subscribe', store.getState()))

export default store;
