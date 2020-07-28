import { createMuiTheme } from '@material-ui/core/styles'

const baseColors = {
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
      main: baseColors.green,
    },
    secondary: {
      main: baseColors.dkGray,
    },
  },
})

export default theme
