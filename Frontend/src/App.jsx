/** @format */
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme as theme } from './themes/Theme';

import AppRoutes from './routes/AppRoutes';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        {/* <ThemeProvider theme={theme}> */}
        <Navbar />
        <AppRoutes />
        <Footer />
        {/* </ThemeProvider> */}
      </Router>
    </>
  );
}

export default App;
