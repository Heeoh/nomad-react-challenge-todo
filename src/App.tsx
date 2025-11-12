import GlobalStyle from './styles/GlobalStyle';
import ToDoList from './Components/ToDoList';
import RecoilStorageSync from './RecoilStorageSync';
import styled, { ThemeProvider } from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkState } from './states/themeAtom';
import { darkTheme, lightTheme } from './styles/theme';

const ThemeToggleButton = styled.span`
  position: fixed;
  bottom: 20px;
  left : 24px;
  z-index: 1;

  padding: 10px 10px;
	width: 40px;
	height: 40px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.bgColors.dimmed};
  color: ${({ theme }) => theme.textColors.normal};
  user-select: none;

  /* transition: background-color 0.2s ease-out; */
`;

export const MaterialSymbol = styled.span`
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  display: inline-block;
	justify-content: center;
	align-items: center;
  /* color: ${({ theme }) => theme.textColors.reversed}; */

  font-variation-settings: 
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;


function App() {
	const [isDark, setIsDark] = useRecoilState(isDarkState);
	const toggleTheme = () => {
		console.log(isDark)
		setIsDark((prev) => !prev)
	}

  return (
		<>
			<ThemeProvider theme={() => isDark ? darkTheme : lightTheme}>
				<RecoilStorageSync/>
				<ToDoList/>
				<ThemeToggleButton onClick={toggleTheme}>
					<MaterialSymbol>{isDark ? "dark_mode" : "light_mode"}</MaterialSymbol>
				</ThemeToggleButton>
				<GlobalStyle/>
			</ThemeProvider>
		</>
	);
}

export default App;
