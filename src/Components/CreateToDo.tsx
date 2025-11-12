import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, selectedCategoryState } from "../atoms/categoryAtom";
import { todoListState } from "../atoms/todoAtom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
	toDo: string;
}

const Form = styled.form`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const Input = styled.input.attrs(
	{autoComplete: "off", autoCorrect: "off", spellCheck: false})`
	width: 100%;
	height: 36px;
	padding: 0 12px;
	border: none;
	border-radius: 8px;
	background-color: ${({theme}) => theme.bgColors.dimmed};
	color: ${({theme}) => theme.textColors.normal};;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	&:focus {
		border: none;
		outline-color: ${({theme}) => theme.brandColors.primary};
	}
`;

const AddButton = styled.button`
	width: auto;
	height: 36px;
	white-space: nowrap;
	text-align: center;
	font-size: 14px;
	font-weight: 500;
	padding: 8px 16px;
	border-radius: 8px; 
	background-color: ${({theme}) => theme.bgColors.dimmed};
	color: ${ ({theme}) => theme.textColors.normal };
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

function CreateToDo() {
	const setToDoList = useSetRecoilState(todoListState);
	const category = useRecoilValue(selectedCategoryState);
	const categories = useRecoilValue(categoriesState);

	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = ({ toDo }: IForm) => {
    setToDoList((oldToDos) => [
      { id: Date.now(), text: toDo, category: category ?? categories[0]},
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

	return (
		<Form 
			onSubmit={handleSubmit(handleValid)}
		>
			<Input {...register(
					"toDo",
					{ required: "Please write a to do." },
				)}
				placeholder={category ? `[ ${category} ] 에 추가할 할 일을 입력하세요.` : `할 일을 입력하세요.`}
			></Input>
			<AddButton>add</AddButton>
		</Form>
	);
}

export default CreateToDo;