import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Private_Page from '../Imports/private.pages';

const Private_Routes = () => {
  return (
    <>
      <Routes>
        <Route index element={ <Private_Page.Home /> }/>
        <Route path='Home' element={ <Private_Page.Home /> }/>
        <Route path='Programming'> 
          <Route path='Validations' element={ <Private_Page.Validations /> } />
        </Route>
        <Route path='Apis'> 
          <Route index element={ <Private_Page.Apis_Dashboard /> } />
          <Route path='Countries_Api/' element={ <Private_Page.Countries_Api /> } />
        </Route>
      </Routes>
    </>
  )
};

export default Private_Routes;