//Phần UI có 2 component chính là: Filter,và Todolist 
//Cho nên cần có 2 state lưu trong store nên cần có 2 state trong initState

import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodosSlice"

//Trong FiltersReducer và todoListReducer đã có initState nên trong rootReducer ko cần

//Reducer luôn nhận vào 2 tham số là state và action
const rootReducer = (state = {}, action) => {
    return {
        filters: filtersReducer(state.filters, action),
        todoList: todoListReducer(state.todoList, action)
    }
}

export default rootReducer