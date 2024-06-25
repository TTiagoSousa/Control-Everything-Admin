import React from 'react';
import './Currencies_Api.scss';
import { Link } from 'react-router-dom';
import Global_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import useUpdateCurrenciesRate from '../../../../../Hooks/Currency/useUpdateCurrenciesRate';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useTranslation } from 'react-i18next';

const Currencies_Api = () => {

  const { t } = useTranslation();

  const {
    updateCurrenciesRate,
    updateRate, setUpdateRate,
    updateRateLoading, setUpdateRateLoading
  } = useUpdateCurrenciesRate();

  return (
    <div className='Currencies_Api'>

      <div className="Alert">
        <Mui_Alert />
      </div>

      <div className='Used_Api'>
        <Link target="_blank" to="https://currencybeacon.com/">https://currencybeacon.com/</Link>
      </div>
      <div className='Actions'>
        <div className='Title'>
          <span>Actions</span>
        </div>
        <div className='Button_Field'>
          <Global_Button 
            onClick={updateCurrenciesRate}
            Text={updateRateLoading ? "Loading..." : t("Update currencies rate")}
          />
        </div>
      </div>
    </div>
  )
};

export default Currencies_Api;