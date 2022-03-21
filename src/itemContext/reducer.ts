import {
  CHANGE_STATUS,
  ADD_TODO,
  SET_CURRENT,
  CHANGE_TOGGLE,
  CHANGE_TOGGLE_ADD,
  GET_TASKS,
} from "./types";
import { todo } from "../tsTypes";

export default function reducer(state: any, action: any) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        todos: action.payload,
      };

    case CHANGE_STATUS:
      return {
        ...state,
        todos: state.todos.map((item: todo): todo => {
          // Тип выходного значения не имеет смысла?
          return item.idNum === action.payload.idNum ? action.payload : item;
        }),
        currentTask: null,
      };

    case SET_CURRENT:
      return {
        ...state,
        currentTask: action.payload,
      };

    case CHANGE_TOGGLE:
      return {
        ...state,
        modalToggle: action.payload,
      };

    case CHANGE_TOGGLE_ADD:
      return {
        ...state,
        modalToggle_ADD: action.payload,
      };

    default:
      return state;
  }
}
