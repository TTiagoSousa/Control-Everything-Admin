import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavsState } from './Navs_Context';
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const navigate = useNavigate();

  const { setAlert } = NavsState();

  const [ authenticated, setAuthenticated ] = useState(false);
  const [ userId, setUserID ] = useState(null);
  const [ jobType, setJobType ] = useState(null);
  
  useEffect(() => {
    const checkAuthentication = () => {

      const token = Cookies.get('erg::#4%&gtreatrbaetrg53df');
      const id = Cookies.get('GRW432::;3_#2vd345435')
      const jobType = Cookies.get('rega434tgr_#23efdf2df');

      if (token){
        try{

          var decoded = jwt_decode.jwtDecode(token);

          const currentTime = Math.floor(Date.now() / 1000);

          if (decoded.exp < currentTime) {
            handleTokenExpiration();
          } else {
            setUserID(id);
            setJobType(jobType);
            setAuthenticated(true);
            
          }
        } catch (error){
          handleTokenExpiration();
        }
      }  else{
        setAuthenticated(false);
      }
    }

    const handleTokenExpiration = () =>{
      Cookies.remove('erg::#4%&gtreatrbaetrg53df');
      Cookies.remove('GRW432::;3_#2vd345435'); 
      Cookies.remove('rega434tgr_#23efdf2df');

      setAuthenticated(false);
      setUserID(null);
      setJobType(null);

      navigate('/');

      setAlert({
        open: true,
        message: 'Session expired. Please log in again.',
        type: 'warning',
      });
    }

    checkAuthentication();
    
  }, [navigate, setAlert])
  
  return (
    <DataBase.Provider 
      value={{ 
        authenticated, setAuthenticated,
        userId,setUserID,jobType
      }}
    >
      {children}
    </DataBase.Provider>
  );
};

export default DataBaseContext;

export const DataBaseState = () => { 
  return useContext(DataBase);
};






