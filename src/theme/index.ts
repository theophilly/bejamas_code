import { createTheme } from '@mui/material/styles';
import { componentStyleOverrides } from './componentStyleOverrides';
import { themeTypography } from './typography';
import { themePalette } from './palette';
import { string } from 'prop-types';

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    [key: string]: any;
  }
  interface Palette {
    [key: string]: any;
  }
}
declare module '@mui/material/styles/createTypography' {
  interface Typography {
    [key: string]: any;
  }
}

export default createTheme({
  components: componentStyleOverrides(),
  palette: themePalette(),
  typography: themeTypography(),
});
