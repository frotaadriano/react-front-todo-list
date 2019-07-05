import axios from 'axios' 

const URL = 'http://localhost:3003/api/todos'; 

//ok 
export function search()  {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return  {
        type: 'TASK_LIST_SEARCHED',
        payload: request
    }
}

//ok 
export function remove(id){
   
    return dispatch => {
        axios.delete(`${URL}/${id}`)
        .then(resp => dispatch(search()))
    }
}


export function changeValue(e){
    console.log('chegou em changeValue ')
    return {
        type: 'TASK_LIST_VALUE_CHANGED',
        payload: e.target.value
    }
}

export function handleSaveClick(id){
    console.log('chegou em handleSaveClick', id)
    return {
        type: 'TASK_LIST_SAVE_CLICKED',
        payload: id
    }
}



export function handleEditClick(id){
    console.log('chegou em handleEditClick', id)  
}
 