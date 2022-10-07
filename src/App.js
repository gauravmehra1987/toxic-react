import SearchAppBar from './components/common/SearchAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicMasonry from './components/product/BasicMasonry';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff0',
      main: '#fff',
      dark: '#000',
      contrastText: '#2BF21E',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <SearchAppBar />
          {/* <BasicMasonry /> */}
        </div>
    </ThemeProvider>
    
  );
}

export default App;
