export interface todo {
  readonly idNum: number;
  readonly text: string;
  readonly done: boolean;
  readonly paramToFind?: string;
}
export interface contextInterface {
  todos: todo[];
  currentTask: todo | null;
  modalToggle: boolean;
  modalToggle_ADD: boolean;
  getAllTasks: () => void;
  addTodo: (todo: todo) => void;
  changeToggle: (modal: boolean, modalType: string) => void;
  updateTask: (item: todo, id?: number) => void;
  setCurrent: (item: todo) => void;
}

export type ItemType = {
  idNum: number;
  text: string;
  done: boolean;
  paramToFind?: string;
};
