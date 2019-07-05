const TASK_LIST_VALUE_CHANGED = 'TASK_LIST_VALUE_CHANGED'
const TASK_LIST_SAVE_CLICKED = 'TASK_LIST_SAVE_CLICKED'
const TASK_LIST_DELETE_CLICKED = 'TASK_LIST_DELETE_CLICKED'
const TASK_LIST_EDIT_CLICKED = 'TASK_LIST_EDIT_CLICKED'

const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) =>  {
  
    switch (action.type) {
        case TASK_LIST_VALUE_CHANGED:
            console.log('taskListReducer: TASK_LIST_VALUE_CHANGED')
            return {}
        case TASK_LIST_SAVE_CLICKED:
            console.log('taskListReducer: TASK_LIST_SAVE_CLICKED')
            return {}
        case TASK_LIST_DELETE_CLICKED: 
            console.log('taskListReducer: TASK_LIST_DELETE_CLICKED')
            return {...state }
        case TASK_LIST_EDIT_CLICKED:
            console.log('taskListReducer: TASK_LIST_EDIT_CLICKED')
            return {}
        case 'TASK_LIST_SEARCHED': 
                return {...state, list: action.payload.data} 
        default:
            return state
            
    }
}