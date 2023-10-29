import { ACTIVE, ADD_TODO_LIST, ALL, CHECKBOX_TODO_LIST, COMPLETED, DELETE_TODO_LIST, EDIT_TODO_LIST } from "../actions/todoAction"

const initialState = {
    todos : []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO_LIST:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case ALL:
            return{
                ...state,
                filter : "ALL"
            }
        case ACTIVE:
            return{
                ...state,
                filter : "ACTIVE"
            }
        case COMPLETED:
            return{
                ...state,
                filter : "COMPLETED"
            }
        case CHECKBOX_TODO_LIST:
            return{
                ...state,
                todos: state.todos.map((item) => (item.id === action.payload ? {...item, isDone: !item.isDone} : item))
            }
        case DELETE_TODO_LIST:
            return{
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            }
        case EDIT_TODO_LIST:
            return{
                ...state,
                todos: state.todos.map((item) => (item.id === action.payload.id ? {...item, title: action.payload.title} : item))
            }
        default: return state
    }
}

export default todoReducer