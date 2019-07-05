import { combineReducers } from 'redux';
import taskListReducer from './../Molecules/TaskList/taskListReducer'

const rootReducer = combineReducers({
    minhasTasks: taskListReducer  
})

export default rootReducer
 

