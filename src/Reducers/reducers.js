import { combineReducers } from 'redux';
import taskListReducer from './../Molecules/TaskList/taskListReducer'

const rootReducer = combineReducers({
    minhasTasks: taskListReducer 
//     meuState: () => ( 
//         console.log('Passou pelo combineReducers'),
//         {
            
//             outroCampo: 'este é minha var outroCampo do meu storage',
//             taskList: taskListReducer  
//         })
})

export default rootReducer

 // [
                // {
                //     _id: 1,
                //     all_day: false,
                //     is_done: false,
                //     is_deleted: false,
                //     due_date: '21/12/2019',
                //     content: '[from storage] - criar api node de projeto todolist',
                //     task_order: 1,
                //     user_id: 'qwdb23by2312123bb',
                //     category: ' Estudos Node',
                //     priority: 3,
                //     flag: 'Estudos Node',
                //     createdAt: '2019-04-20T03:38:28.154+00:00'
                // },
                // {
                //     _id: 2,
                //     all_day: true,
                //     is_done: false,
                //     is_deleted: false,
                //     due_date: '22/12/2019',
                //     content: '[from storage] - react-redux',
                //     task_order: 1,
                //     user_id: 'qwdasdasdasdb',
                //     category: ' Estudos react-redux',
                //     priority: 0,
                //     flag: 'react-redux',
                //     createdAt: '2019-05-20T03:38:28.154+00:00'
                // },
                // {
                //     _id: 3,
                //     all_day: true,
                //     is_done: true,
                //     is_deleted: false,
                //     due_date: '23/12/2019',
                //     content: '[from storage] - routes',
                //     task_order: 2,
                //     user_id: '12345trewq',
                //     category: 'react-routes',
                //     priority: 1,
                //     flag: 'react-routes',
                //     createdAt: '2019-05-20T03:38:28.154+00:00'
                // }
           // ]

