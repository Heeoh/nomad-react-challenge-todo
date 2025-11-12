// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
		mode: string,
		brandColors: {
			primary: string;
    }
    bgColors: {
			normal: string;
			reversed: string;
			dimmed: string;
		}
		textColors: {
			normal: string;
			reversed: string;
		}
		overlayColors: {
			lightBg: string,
			darkBg: string,
			red: string,
			yellow: string,
			purple: string,
			blue: string,
			lime: string,
		}
  }
}