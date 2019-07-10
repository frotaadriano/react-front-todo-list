import axios from 'axios'
import { statement } from '@babel/template';

const URL = 'http://localhost:3003/api/todos';

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

export function handleSaveClick(id) {
    console.log('chegou em handleSaveClick', id)
    return {
        type: 'TASK_LIST_SAVE_CLICKED',
        payload: id
    }
}

export function handleEditClick(id) {
    console.log('chegou em handleEditClick', id)
}
