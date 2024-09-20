import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Private_Page from '../Imports/private.pages';

const Private_Routes = () => {
  return (
    <>
      <Routes>
        <Route index element={ <Private_Page.Dashboard /> }/>
        <Route path='Dashboard' element={ <Private_Page.Dashboard /> }/>
        <Route path='Functions_Validations' element={ <Private_Page.Functions_Validations /> } />
        <Route path='Brockers_Api' element={ <Private_Page.Brokers_Api /> } />
      </Routes>
    </>
  )
};

export default Private_Routes;