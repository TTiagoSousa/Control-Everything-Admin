import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import * as Public_Page from './Imports/public.pages';
import { useState } from 'react';
import Authentication_Check from './Authentication/Authentication_Check';
import * as Private_Page from './Imports/private.pages';
import { DataBaseState } from './Contexts/DataBase_Context';

function App() {

  const { authenticated } = DataBaseState();

  return (
    <>
      <main>
        <Routes>

          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_In' element={ authenticated ? <Navigate to="/" /> :  <Public_Page.Sign_In /> } />

          <Route
            path="/CE_Work_Space/*"
            element={
              <Authentication_Check>
                <Private_Page.CE_Work_Space />
              </Authentication_Check>
            }
          />

        </Routes>
      </main>
    </>
  )
};

export default App;
