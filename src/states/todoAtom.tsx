import { atom, selector } from "recoil";
import IToDo from "../interfaces/IToDo";
import { selectedCategoryState } from "./categoryAtom";

const savedTodoList = localStorage.getItem("todoList");

export const todoListState = atom<IToDo[]>({
	key: "todoList",
	default: savedTodoList ? JSON.parse(savedTodoList) : [],
});

export const todoSelector = selector<IToDo[]>({
	key: "todoSelector",
	get: ({ get }) => {
		const todoList = get(todoListState);
		const selectedCategory = get(selectedCategoryState)
		return selectedCategory 
						? todoList.filter((todo) => todo.category === selectedCategory) 
						: todoList
	},
});
