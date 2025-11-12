import { useRecoilValue } from "recoil";
import { categoriesState } from "./states/categoryAtom";
import { todoListState } from "./states/todoAtom";
import { useEffect } from "react";

function RecoilStorageSync() {
	const categories = useRecoilValue(categoriesState);
	const todoList = useRecoilValue(todoListState);

	useEffect(()  => {
		localStorage.setItem("categories", JSON.stringify(categories));
	}, [categories])

	useEffect(()  => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList])

	return null;
}

export default RecoilStorageSync;