import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavsState } from "../../Contexts/Navs_Context";
import { DataBaseState } from "../../Contexts/DataBase_Context";
import http from "../../Services/httpService";
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import { TOKEN_COOKIE_NAME, USER_ID_COOKIE_NAME, USER_JOB_COOKIE_NAME } from '../../config/cookies';

export const useSignin = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const { setAuthenticated } = DataBaseState();

  const [email, setEmail] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signin = async () => {

    console.log('Sign in ' + 'Entrou na função')

    if (!email || !employeeNumber || !password) {
      setAlert({
        open: true,
        message: t("All fields are required"),
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

        Cookies.set(TOKEN_COOKIE_NAME, token);
        Cookies.set(USER_ID_COOKIE_NAME, decoded.id);
        Cookies.set(USER_JOB_COOKIE_NAME, decoded.EmployeeRole);
      }

      setAuthenticated(true);

      setAlert({
        open: true,
        message: t("Login successful"),
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE_Work_Space/Dashboard');
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