import React, { useState } from 'react';
import './Sign_In.scss';
import { useTranslation } from 'react-i18next';
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from  '../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useSignin } from '../../../Hooks/Auth/useSignin';

const Sign_In = () => {

  const { t } = useTranslation();

  const{     
    employeeNumber, setEmployeeNumber,
    email, setEmail,
    password, setPassword,
    signin 
  } = useSignin();

  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    
    setLoading(true);
    try {
      await signin();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='Sign_In'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <form>
        <div className="Title">
          <span>{t('Sign in')}</span>
        </div>
        <div className="Input_Field">
          <Global_Input
            text={t("Number")}
            Type="number"
            Value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            text={t('Email')}
            type="email"
            Value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            text={t('Password')}
            type="password"
            Value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Button_Field">
          <Global_Button 
            text={loading ? t('Loading...') : t('Sign in')}
            type="button"
            onClick={handleSignIn}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  )
}

export default Sign_In;