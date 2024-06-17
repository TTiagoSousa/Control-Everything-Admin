import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import Header_Index from './Containers/Headers/Header_Index/Header_Index';

function App() {

  const location = useLocation();
  const showHeader = location.pathname === '/' || location.pathname === '/SignIn' || location.pathname === '/SignUp';

  return (
    <>
      <main>

        {showHeader && <Header_Index />}
        
        <Routes>
          <Route index element={<Public_Page.Index />} />
        </Routes>

      </main>
    </>
  )
};

export default App;
