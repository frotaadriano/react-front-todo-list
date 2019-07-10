import { combineReducers } from 'redux';
import taskListReducer from './../Molecules/TaskList/taskListReducer'
import tagReducer from './tagReducer'

const rootReducer = combineReducers({
    minhasTasks: taskListReducer,
    myTags: tagReducer  
})

export default rootReducer
 

