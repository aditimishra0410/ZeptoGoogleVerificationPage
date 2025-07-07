import React from 'react';
import { Routes, Route } from 'react-router-dom';

import OnePageForGoogle from './Components/OnePageForGoogle';
import GoogleVerification from './Components/GoogleVerification';

const AppRoutes = () => (
  <>

    <Routes>
      <Route path="/" element={<GoogleVerification />} />
 
      <Route path="/google-verification" element={<GoogleVerification />} />
    </Routes>
  </>
);

export default AppRoutes;
