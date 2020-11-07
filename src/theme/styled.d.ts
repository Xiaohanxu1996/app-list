import {} from 'styled-components';
import { ThemeType } from '@theme/Themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
