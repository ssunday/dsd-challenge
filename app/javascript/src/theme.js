import { createMuiTheme } from '@material-ui/core/styles'

export const colors = {
  green: '#5bc3a6',
  ltGray: '#ececec',
  midGray: '#c1c1c1',
  bgLtGray: '#f4f4f4',
  dkGray: '#5c5c5c',
  black: '#000000',
  white: '#ffffff',
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.dkGray,
    },
    navLink: {
      main: colors.white,
    },
  },
})

export default theme
