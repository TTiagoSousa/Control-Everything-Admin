import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavsState } from "../../Context/Navs_Context";
import { DataBaseState } from "../../Context/DataBase_Context";
import http from "../../Services/httpService";
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";

export const useSignin = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const { setAuthenticated } = DataBaseState();

  const [email, setEmail] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const signin  = async (e) => {
    e.preventDefault();

    if (!email || !employeeNumber || !password) {
      setAlert({
        open: true,
        message: "All fields must be filleds",
        type: 'error'
      });
      
      return;
    }

    try{
      const response = await http.post(`auth-employee/sign-in`, {
        email: email,
        password: password,
        employeeNumber: parseFloat(employeeNumber)
      });

      const { token, id } = response.data;

      if (token) {
        const decoded = jwt_decode.jwtDecode(token);
  
        sessionStorage.setItem('rewg42345ge_32g:F2sfgreagdc', token);
        Cookies.set('erg::#4%&gtreatrbaetrg53df', token);
        Cookies.set('GRW432::;3_#2vd345435', decoded.id);
        Cookies.set('rega434tgr_#23efdf2df', decoded.EmployeeRole);
      }

      setAuthenticated(true);

      setAlert({
        open: true,
        message: t("Login successful"),
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE_Work_Space');
        window.location.reload();
      }, 3000);
      
    }catch (error) {
      if (error.response && error.response.status === 400) {
        let errorMessage = error.response.data.message;
        errorMessage = t(errorMessage);
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  }

  return {
    employeeNumber, setEmployeeNumber,
    email, setEmail,
    password, setPassword,
    signin
  }
}