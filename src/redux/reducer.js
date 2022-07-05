//Phần UI có 2 component chính là: Filter,và Todolist 
//Cho nên cần có 2 state lưu trong store nên cần có 2 state trong initState

const initState = {
    filters: {
        //Trong component Filter có 3 thành phần con: 
        //1. filter theo Search
        //2. Filter theo status (all, compeleted, todo)
        //3. filter by Priority
        //nên filter gồm 3 trường
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
        { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
    ]
}

//Reducer luôn nhận vào 2 tham số là state và action
const rootReducer = (state = initState, action) => {
    console.log(state, action)
    /*
    vi du action:
    {
        type:'todoList/addTodo',
        payLoad:{id:5,name:'Learn Footbal', completed:false, priority: 'Medium'}
    }
    */
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payLoad
                ]
            }
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payLoad
                }
            }
        default:
            return state;
    }
}

export default rootReducer