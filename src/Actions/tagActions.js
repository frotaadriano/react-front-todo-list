import axios from 'axios'

const URL = 'http://localhost:3000/api/tags';


const response  = [
    {
        "_id": "5d254d57c84db10f90a62f9c",
        "name": "React studies",
        "color": "red"
    },
    {
        "_id": "5d254d60c84db10f90a62f9d",
        "name": "Work",
        "color": "green"
    },
    {
        "_id": "5d254d81c84db10f90a62f9e",
        "name": "To pay",
        "color": "blue"
    },
    {
        "_id": "5d254da4c84db10f90a62f9f",
        "name": "Car",
        "color": "cyan"
    },
    {

        "_id": "5d254db9c84db10f90a62fa0",
        "name": "70-480",
        "color": "black"
    },
    {
        "_id": "5d254dc9c84db10f90a62fa1",
        "name": "Goals TC22222222222222222222222"
    }
]

// export function search() {    
//     return {
//         type: 'TAG_LIST_SEARCHED',
//         payload: response
//     }
// }

export function search() {
    //const response = axios.get(`${URL}?sort=-createdAt`);
    
     
    return {
        type: 'TAG_LIST_SEARCHED',
        payload: response
    }
}

