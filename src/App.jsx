import { ChakraProvider, extendTheme } from '@chakra-ui/react'; 
import { Outlet } from 'react-router-dom'; 
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#2E2E2E', 
        color: '#FAF3E0', 
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}> 
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;