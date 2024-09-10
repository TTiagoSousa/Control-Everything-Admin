import { Route, Routes } from 'react-router-dom';
import './App.scss';
import * as Public_Page from './Imports/public.pages';
import { useState } from 'react';

function App() {

  const { authenticated, setAuthenticated } = useState(false)

  return (
    <>
      <main>
        <Routes>

          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_In' element={ authenticated ? <Navigate to="/" /> :  <Public_Page.Sign_In /> } />

        </Routes>
      </main>
    </>
  )
};

export default App;
