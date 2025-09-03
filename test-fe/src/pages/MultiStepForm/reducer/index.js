import { combineReducers } from 'redux';
import formReducer from './FormReducer';

const allReducers = combineReducers({
    form: formReducer
});

export default allReducers