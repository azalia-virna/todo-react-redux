export const ADD_TODO_LIST = "ADD_TODO_LIST"
export const ALL = "ALL"
export const ACTIVE = "ACTIVE"
export const COMPLETED = "COMPLETED"
export const CHECKBOX_TODO_LIST = "CHECKBOX_TODO_LIST"
export const DELETE_TODO_LIST = "DELETE_TODO_LIST"
export const EDIT_TODO_LIST = "EDIT_TODO_LIST"

export const addTodoList = (item) => ({
    type : ADD_TODO_LIST,
    payload : item
})

export const all = () => ({
    type : ALL
})

export const active = () => ({
    type : ACTIVE
})

export const completed = () => ({
    type : COMPLETED
})

export const checkboxTodoList = (id) => ({
    type : CHECKBOX_TODO_LIST,
    payload : id
})

export const deleteTodoList = (id) => ({
    type : DELETE_TODO_LIST,
    payload : id
})

export const editTodoList = (item) => ({
    type : EDIT_TODO_LIST,
    payload : item
})