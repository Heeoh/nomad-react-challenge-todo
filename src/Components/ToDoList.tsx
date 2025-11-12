import { useRecoilValue } from "recoil";
import { todoSelector } from "../atoms/todoAtom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";
import CategoryTabBar from "./CategoryTabBar";
import IToDo from "../interfaces/IToDo";

const Container = styled.div`
	padding: 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const Header = styled.header`
	height: 16vh;
	display: flex;
  justify-content: center;
  align-items: center;
	h1 {
		font-size: 38px;
		font-weight: 500;
		color: ${(props) => props.theme.textColors.normal}
	}
`;

const TodoList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 12px 0;
	margin: 20px 0;
	border-radius: 8px; 
`;


function ToDoList() {
	const toDos = useRecoilValue(todoSelector);

  return (
    <Container>
      <Header>
				<h1>To Do List</h1>
			</Header>
			<CategoryTabBar/>
			
			<hr />
			
			<CreateToDo />
			<TodoList>
        {toDos.map((toDo: IToDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
			</TodoList>
      
		</Container>
  );
}

export default ToDoList;