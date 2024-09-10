import React, { useState } from 'react';
import './Sign_In.scss';
import { useTranslation } from 'react-i18next';
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from  '../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Sign_In = () => {

  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    setLoading(true);
    try {

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
            text={t('Number')}
            type="number"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            text={t('Email')}
            type="email"
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            text={t('Password')}
            type="assword"
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