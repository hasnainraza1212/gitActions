import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { store } from './Redux/Store/Store.js';
import { Provider } from 'react-redux'
const theme = createTheme({
  palette: {
    primary: {
      main: '#1F1E17',
    },
    secondary: {
      main: '#878680',
    },
    success: {
      main: '#4BAF47',
    },
    warning: {
      main: '#EEC044',
    },
    background: {
      default: '#ffffff',
      paper: '#F8F7F0',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <Provider store={store}>
          <App />
      </Provider>
     </ThemeProvider>
  </React.StrictMode>,
)
