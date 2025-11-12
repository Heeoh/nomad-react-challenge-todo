import { DefaultTheme } from "styled-components/dist/types";

export const lightTheme: DefaultTheme = {
	mode: "light",
	brandColors: {
		primary: "#FFA000",
	},
	bgColors: {
		normal: "#eeeeee",
		reversed: "#212121",
		dimmed: "#ffffff",
	},
	textColors: {
		normal: "#212121",
		reversed: "#f5f5f5",
	},
	overlayColors: {
		lightBg: "#ffffff80",
		darkBg: "#21212180",
		red: "#ff0000bb",
		yellow: "#ffc10780",
		purple: "#9C27B080",
		blue: "#2196F380",
		lime: "#CDDC3980",
	},
}

export const darkTheme: DefaultTheme = {
	mode: "dark",
	brandColors: {
		primary: "#FBC02D",
	},
	bgColors: {
		normal: "#212121",
		reversed: "#f5f5f5",
		dimmed: "#111111",
	},
	textColors: {
		normal: "#f5f5f5",
		reversed: "#212121",
	},
	overlayColors: {
		lightBg: "#ffffff80",
		darkBg: "#21212180",
		red: "#ff0000bb",
		yellow: "#fbc12dbb",
		purple: "#e91e62b7",
		blue: "#2196F380",
		lime: "#CDDC3980",
	},
}
