import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Router'; // or './AppRoutes'
// import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
