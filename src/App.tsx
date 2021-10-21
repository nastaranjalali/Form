import './App.css'
import theme from './themes/theme'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import IndexScreen from './screens/index'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <IndexScreen />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
