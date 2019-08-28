import axios from 'axios' 

  const URL = 'http://localhost:3000/api/todos';
//const URL = 'https://node-webapi-todo-list.herokuapp.com/api/todos';


//ok 
export function search() {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TASK_LIST_SEARCHED',
        payload: request
    }
}

//ok 
export function remove(id) {  
    return dispatch => {
        axios.delete(`${URL}/${id}`)
            .then(resp => dispatch(search()))
    }
}

//ok
export function add(content) {
    return dispatch => {
        axios.post(URL, { content })
            .then(resp => dispatch(search()))
    }
}

//ok
export function keyPress(event) {
    if (event.key === 'Enter') {
        return dispatch => {
            let content = event.target.value;
            axios.post(URL, { content })
                .then(resp => dispatch(search()))
        }
    } else { return dispatch => { } }
}

//ok
export function done(task) { 
    return dispatch => {
        console.log(task)   
          axios.put(`${URL}/${task._id}`, { ...task, is_done: true  })
            .then(resp => dispatch(search()))
    }
}

//ok
export function undone(task) { 
    return dispatch => {
        console.log(task)   
          axios.put(`${URL}/${task._id}`, { ...task, is_done: false  })
            .then(resp => dispatch(search()))
    }
}


export function changeValue(e) {
    console.log('chegou em changeValue ')
    return {
        type: 'TASK_LIST_VALUE_CHANGED',
        payload: e.target.value
    }
}

export function handleUpdateClick(task, content) {
    debugger
     return dispatch => {
           axios.put(`${URL}/${task._id}`, { ...task, content: content })
            .then(resp => dispatch(search()))
    }
    
    // return {
    //     type: 'TASK_LIST_SAVE_CLICKED',
    //     payload: task
    // }
}

// export function handleEditClick(id) {
//     console.log('chegou em handleEditClick', id)
// }
