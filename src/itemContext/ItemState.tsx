import React, { useReducer } from "react";
import {
  CHANGE_STATUS,
  ADD_TODO,
  SET_CURRENT,
  CHANGE_TOGGLE,
  CHANGE_TOGGLE_ADD,
  GET_TASKS,
} from "./types";
import { contextInterface, todo } from "../tsTypes";
import itemContext from "./itemContext";
import reducer from "./reducer";

export default function ItemState(props: any) {
  const initialState: contextInterface = {
    todos: [],
    currentTask: null,
    modalToggle: false,
    modalToggle_ADD: false,
    async getAllTasks() {
      try {
        const res = await fetch("/tasks");
        const result = await res.json();

        console.log(result);
        dispatch({ type: GET_TASKS, payload: result });
      } catch (err: any) {
        console.log(err.message);
      }
    },
    async addTodo(todo: todo) {
      try {
        await fetch("/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        });
      } catch (err: any) {
        console.log(err.message);
      }
    },
    changeToggle(modal: boolean, modalType: string): void {
      dispatch({ type: modalType, payload: modal });
    },
    async updateTask(todo: todo, id?: number) {
      try {
        const res = await fetch(`/tasks/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        });
        const response = await res.json();
        dispatch({ type: CHANGE_STATUS, payload: response });
        console.log(response);
      } catch (err: any) {
        console.log(err.message);
      }
    },
    setCurrent(todo: todo): void {
      dispatch({ type: SET_CURRENT, payload: todo });
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <itemContext.Provider
      value={{
        todos: state.todos,
        currentTask: state.currentTask,
        modalToggle: state.modalToggle,
        modalToggle_ADD: state.modalToggle_ADD,
        changeToggle: state.changeToggle,
        updateTask: state.updateTask,
        setCurrent: state.setCurrent,
        getAllTasks: state.getAllTasks,
        addTodo: state.addTodo,
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
}
