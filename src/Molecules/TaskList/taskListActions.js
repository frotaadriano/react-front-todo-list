import axios from 'axios'
import { async } from 'q';


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
    // return {
    //     type: 'TASK_LIST_EDIT_CLICKED',
    //     payload: id
    // }
}
// handleDeleteClick = (id) => {
//     confirmAlert({
//         title: 'Confirmation!',
//         message: 'Are you sure to delete?',
//         buttons: [
//             {
//                 label: 'Yes',
//                 onClick: () => {
//                     axios.delete(URL + '/' + id)
//                         .then(
//                             resp => {
//                                 //  console.log('fiz um delete', resp);
//                                 // debugger;
//                                 //todo atualizar a pagina
//                                 window.location.reload()
//                             }
//                         )
//                 }
//             },
//             {
//                 label: 'No',
//                 //onClick: () => alert('Click No')
//             }
//         ]
//     });
// }



