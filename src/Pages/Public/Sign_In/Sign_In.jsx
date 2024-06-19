import React from 'react';
import './Sign_In.scss';
import { useTranslation } from 'react-i18next';
import GLobal_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useSignin } from '../../../Hooks/Auth/Signin';

const Sign_In = () => {

  const { t } = useTranslation();

  const{     
    employeeNumber, setEmployeeNumber,
    email, setEmail,
    password, setPassword,
    signin 
  } = useSignin();

  return (
    <div className='Sign_In'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <form>
        <div className='Title'>
          <h1>{t('Sign in')}</h1>
        </div>
        <div className="Input_Field">
          <GLobal_Input
            Text={t("Employee number")}
            Type="number"
            Value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <GLobal_Input 
            Text={t("Email")}
            Type="email"
            Value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <GLobal_Input 
            Text={t("Password")}
            Type="password"
            Value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Button_Field">
          <Global_Button 
            Text={t("Sign In")}
            onClick={signin}
          />
        </div>
      </form>
    </div>
  )
};

export default Sign_In;
