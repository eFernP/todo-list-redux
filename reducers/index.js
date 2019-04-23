import { combineReducers } from 'redux';
import todos from './todos';
import inputAdd from './inputAdd';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos, 
  inputAdd,
  visibilityFilter
})