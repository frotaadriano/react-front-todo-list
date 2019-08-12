const TAG_LIST_SEARCHED = 'TAG_LIST_SEARCHED' 

const INITIAL_STATE = { tagList: [] }

export default (state = INITIAL_STATE, action) =>  {
  debugger
    switch (action.type) {
        case TAG_LIST_SEARCHED:
             return {...state, tagList: action.payload.data}
         default:
            return state
            
    }
}
 