import styled from "styled-components";
import { categoriesState, selectedCategoryState } from "../states/categoryAtom";
import { useRecoilState } from "recoil";

const Tabs = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin:12px 0px;
	gap: 8px;
`;

const Tab = styled.button<{$isActive : boolean}>`
	display: inline-flex;
	width: auto;
	white-space: nowrap;
	text-align: center;
	font-size: 14px;
	font-weight: ${({$isActive}) => $isActive ? 600 : 400};
	padding: 6px 20px;
	border-radius: 12px; 
	background-color: ${({theme}) => theme.bgColors.dimmed};
	color: ${({$isActive, theme}) => 
		$isActive ? theme.brandColors.primary : theme.textColors.normal
	};
`;

function CategoryTabBar() {
	const [categories, setCategories] = useRecoilState(categoriesState);
	const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);

	const selectCategory = (cur: string) => {
		setSelectedCategory((prev) => prev === cur ? null : cur)
	};

	const addNewCategory = () => {
		console.log("add new category")
		const newCategoryName = prompt("카테고리 이름을 입려해주세요.") ?? "";
		const error = validateCategory(newCategoryName)
		if (error) {
			alert(error);
			return;
		}
		setCategories((prev) => [...prev, newCategoryName])
	};

	const validateCategory = (newCategory: string | null) => {
		if (!newCategory) {
			return "카테고리 이름을 입력해주세요.";
		}
		
		const trimmed = newCategory.trim();
		if (trimmed.length < 1 || trimmed.length > 10) {
			return "카테고리 이름은 1자 이상 10자 이하여야 합니다.";
		}

		if (categories.some( (c) => c === trimmed )) {
			return "이미 존재하는 카테고리입니다.";
		}
  	
		return null;
	}

	return (
		<Tabs>
			{categories.map((category) => (
				<Tab
					key={category} 
					$isActive={selectedCategory === category} 
					onClick={ () => selectCategory(category) }
				>
					{category}
				</Tab>	
			))}
			<Tab $isActive={false} onClick={addNewCategory}>
				+
			</Tab>
		</Tabs>
	);
}

export default CategoryTabBar;