import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#81b23e'
    },
    secondary: {
      main: '#dae1c3'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#f8f8f8'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: '3.4rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.75rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    h5: {
      fontSize: '1.25rem'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '30px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '25px',
        paddingRight: '25px'
      }
    }
  }
})

export default theme
