import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import Header_Index from './Containers/Headers/Header_Index/Header_Index';
import Authentication_Check from './Authentication/Authentication_Check';
import CE_Work_Space from './Pages/Private/CE_Work_Space/CE_Work_Space';

function App() {

  const location = useLocation();
  const showHeader = location.pathname === '/' || location.pathname === '/SignIn' || location.pathname === '/SignUp';

  return (
    <>
      <main>

        {showHeader && <Header_Index />}
        
        <Routes>
          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_In' element={<Public_Page.Sign_In />} />
          <Route 
          path="/CE_Work_Space/*"
          element={
            <Authentication_Check>
              <CE_Work_Space />
            </Authentication_Check>            
          } 
        />
        </Routes>

      </main>
    </>
  )
};

export default App;
