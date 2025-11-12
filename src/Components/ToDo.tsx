import { useRecoilValue, useSetRecoilState } from "recoil";
import IToDo from "../interfaces/IToDo";
import { categoriesState } from "../states/categoryAtom";
import { todoListState } from "../states/todoAtom";
import { useState } from "react";
import styled, { keyframes } from "styled-components";



const ItemContainer = styled.li`
	min-height: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 12px;
	color: ${(props) => props.theme.textColors.normal};
	font-size: 18px;
`;

const Buttons = styled.div`
	display: flex;
	gap: 6px;
`;

const Button = styled.button`
	display: inline-flex;
	width: auto;
	white-space: nowrap;
	text-align: center;
	font-size: 14px;
	font-weight: 500;
	padding: 4px 12px;
	border-radius: 8px; 
	
`;

const CategoryButton = styled(Button)`
	background-color: ${({theme}) => theme.overlayColors.yellow};
	color: ${({theme}) => theme.textColors.normal};
`; 

const DeleteButton = styled(Button)`
	background-color: ${({theme}) => theme.overlayColors.red};	
	color: ${(props) => props.theme.textColors.normal};	
`;

const CategorySelect = styled.div`
	position: relative;
`;

const dropdownAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Dropdown = styled.ul`
  position: absolute;
	top: 100%;
	right: 0%;
  margin-top: 4px;
  background: ${({theme}) => theme.bgColors.dimmed};
  border-radius: 8px;
  padding: 10px 12px;

  display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 5px;
	z-index: 1;
	
	animation: ${dropdownAnimation} 0.2s ease-out;
`;


function ToDo({ id, text, category }: IToDo) {
	const [isOpen, setIsOpen] = useState(false);
	const setToDoList = useSetRecoilState(todoListState);
	const categories = useRecoilValue(categoriesState);

	const handleSelectCategory = (newCategory: string) => {
    updateToDoCategory(newCategory)
    setIsOpen(false);
  };

	const updateToDoCategory = (newCategory: IToDo["category"]) => {
		setToDoList(oldToDoList => {
			const targetIdx = oldToDoList.findIndex( todo => todo.id === id );
			const newToDo = {id, text, category: newCategory}
			return [
				...oldToDoList.slice(0, targetIdx), 
				newToDo, 
				...oldToDoList.slice(targetIdx+1)
			];
		});
		// setToDoList(oldToDoList => {
		// 	const newList = oldToDoList.map( todo => {
		// 		return todo.id === id ? {id, text: text, category: newCategory} : todo
		// 	});
			
		// 	return newList;
		// });
	};

	const deleteTodo = () => {
		setToDoList(oldToDoList => {
			const targetIdx = oldToDoList.findIndex( todo => todo.id === id );
			return [
				...oldToDoList.slice(0, targetIdx), 
				...oldToDoList.slice(targetIdx+1)
			];
		});
	}

	return (
		<ItemContainer>
			<span>{text}</span>
			<Buttons >
				<CategorySelect>
					{categories.map((c) => (
						category === c && 
						<CategoryButton 
							key={c}
							onClick={() => setIsOpen((cur) => !cur)}
						>
							{c}
						</CategoryButton>
					))}

					{isOpen && (
						<Dropdown>
							{categories.map((c) => (
								<li>
									<CategoryButton 
										onClick={() => handleSelectCategory(c)}
									>
										{c}
									</CategoryButton>
								</li>
							))}
						</Dropdown>
					)}	
				</CategorySelect>
				<DeleteButton onClick={deleteTodo}>x</DeleteButton>
			</Buttons>
			
		</ItemContainer>
	);
}

export default ToDo;