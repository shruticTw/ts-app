import TodoType from "../types/TodoType";
import {Action} from "../actions/Todos";
import {ActionTypes} from "../actions/Todo";

export default (state: TodoType[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [...state, action.payload.todo];
        default:
            return state
    }
}

