import React from 'react';
import './Index.scss';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { useTranslation } from 'react-i18next';
import { DataBaseState } from '../../../Context/DataBase_Context';

const Index = () => {

  const { t } = useTranslation();

  const { authenticated } = DataBaseState();

  return (
    <div className='Index'>
      <div>
        <Global_Button
          Text={authenticated ? t('Back to dasboard') : t('Sign In')}
          to={authenticated ? '/CE_Work_Space' : 'Sign_In'}
        />
      </div>
    </div>
  )
};

export default Index;
