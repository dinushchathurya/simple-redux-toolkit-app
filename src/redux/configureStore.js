import { 
    configureStore, 
    combineReducers, 
    getDefaultMiddleware
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './ducks/userSlice';
import { watcherSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    user: userReducer
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false}), sagaMiddleware] 
});

sagaMiddleware.run(watcherSaga);

export default store;