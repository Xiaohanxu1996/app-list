import {} from 'styled-components';
import { ThemeType } from './Themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
