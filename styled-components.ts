// styled-components.ts
import { DefaultTheme } from "styled-components";
import * as styledComponents from "styled-components/native";

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>;

export { css, ThemeProvider };
export default styled;