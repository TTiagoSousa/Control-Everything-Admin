import React from 'react';
import './Index.scss';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { useTranslation } from 'react-i18next';

const Index = () => {

  const { t } = useTranslation();

  return (
    <div className='Index'>

      <div className="Button_Field">
        <Global_Button 
          text={t('Sign in')}
          to='Sign_In'
        />
      </div>

    </div>
  )
};

export default Index;