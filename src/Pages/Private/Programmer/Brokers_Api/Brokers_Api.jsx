import React, { useState } from 'react';
import './Brokers_Api.scss';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import { useTranslation } from 'react-i18next';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import { useAddNewAutorizedBroker } from '../../../../Hooks/Autorized_Brokers/useAddNewAutorizedBroker';
import Mui_Alert from '../../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Brokers_Api = () => {

  const { t } = useTranslation();

  const {
    name, setName,
    logo, setLogo,
    webSite, setWebSite,
    type, setType,
    addNewAutorizedBroker
  } = useAddNewAutorizedBroker();

  const [loading, setLoading] = useState(false); // Estado local para o botão

  const handleClick = async () => {
    setLoading(true); // Muda o estado para loading
    await addNewAutorizedBroker();
    setLoading(false); // Volta ao estado normal após a execução
  };

  return (
    <div className='Brokers_Api'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <div className='Add_New_Broker'>
        <div>
          <span>{t('Add new broker')}</span>
        </div>
        <div className='Input_Field'>
          <Global_Input 
            text={t('Name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='Input_Field'>
          <Global_Input 
            text={t('Logo')}
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>
        <div className='Input_Field'>
          <Global_Input 
            text={t('Website')}
            value={webSite}
            onChange={(e) => setWebSite(e.target.value)}
          />
        </div>
        <div className='Input_Field'>
          <Global_Input 
            text={t('Platform type')}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className='Button_Field'>
          <Global_Button 
            text={loading ? t('Loading...') : t('Add new broker')} // Botão exibe 'Loading...' quando está carregando
            onClick={handleClick}
            disabled={loading} // Desabilita o botão enquanto carrega
          />
        </div>
      </div>
    </div>
  );
};

export default Brokers_Api;