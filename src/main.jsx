import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import MainLayout from './components/MainLayout'; 
import Sauce from './components/Sauce';
import Pitmasters from './components/Pitmasters.jsx'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'transparent',
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <MainLayout /> }, 
      { path: 'sauce', element: <Sauce /> },
      { path: 'pitmasters', element: <Pitmasters /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);