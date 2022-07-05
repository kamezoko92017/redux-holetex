// ......................Viết theo kiểu ko dùng reselect....................
/*
function này sẽ trả về tất cả todoList
    export const todoListSelector = (state) => state.todoList
cần viết function để trả về chỉ các todo có chứa cụm từ mà user search
*/

export const todoListSelector = (state) => {
    const todosRemaining = state.todoList.filter((todo) => {
        /*
        Nếu dùng state.filters.search thì sau này mỗi khi cần dùng lại phải
        viết lại nên để tối ưu thì khai báo và sử dụng function searchTextSelector
        const searchText = searchTextSelector(state)
        Đây là ví dụ để giải thích về Core Redux, sau này dùng Toolkit sẽ có 
        library 'reselect' giúp ta sử dụng các function lồng nhau
        */
        return todo.name.includes(state.filters.search)
    })
    return todosRemaining
}

export const searchTextSelector = (state) => state.filters.search

// // ...............Viết theo kiểu dùng reselect....................

// import { createSelector } from 'reselect'

// export const searchTextSelector = (state) => state.filters.search;
// export const todoListSelector = (state) => state.todoList;

// export const todosRemainingSelector = createSelector(
//     todoListSelector,
//     searchTextSelector,
//     (todoList, searchText) => {
//         return todoList.filter((todo) => {
//             return todo.name.includes(searchText)
//         })
//     })