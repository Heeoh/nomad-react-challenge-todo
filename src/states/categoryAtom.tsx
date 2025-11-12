import { atom } from "recoil";

const defaultCategories = ["to do", "in progress", "done"];
const savedCategories = localStorage.getItem("categories")

export const categoriesState = atom<string[]>({
	key: "cateories",
	default: savedCategories ? JSON.parse(savedCategories) : defaultCategories,
});

export const selectedCategoryState = atom<string | null>({
	key: "selectedCategory",
	default: null,
});