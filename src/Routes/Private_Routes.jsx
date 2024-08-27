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
          <Route path='Currencies_Api/' element={ <Private_Page.Currencies_Api /> } />
          <Route path='Crypto_Api/' element={ <Private_Page.Crypto_Api /> } />
        </Route>
        <Route path='Platforms' element={ < Private_Page.Platforms/> } />
        <Route path='Create_An_Article' element={ <Private_Page.Create_An_Article /> } />
      </Routes>
    </>
  )
};

export default Private_Routes;