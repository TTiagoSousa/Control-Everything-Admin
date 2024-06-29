import React from 'react';
import './Platforms.scss';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import { useTranslation } from 'react-i18next';
import useAddNewPlatform from '../../../../Hooks/Platforms/useAddNewPlatform';
import Mui_Alert from '../../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Platforms = () => {

  const { t } = useTranslation();

  const {
    addNewPlatform,
    platformName, setPlatformName,
    platformImage, setPlatformImage,
    platformWebSite, setPlatformWebSite,
    platformType,setPlatformType
  } = useAddNewPlatform()

  return (
    <div className='Platforms'>

      <div className="Alert">
        <Mui_Alert />
      </div>

      <form className='Add_Platforms'>
        <div className='Title'>
          <span>{t('Add new platform')}</span>
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Name')}
            Type="text"
            Value={platformName}
            onChange={(e) => setPlatformName(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Image')}
            Type="text"
            Value={platformImage}
            onChange={(e) => setPlatformImage(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Web site')}
            Type="text"
            Value={platformWebSite}
            onChange={(e) => setPlatformWebSite(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Global_Input 
            Text={t('Platform type')}
            Type="text"
            Value={platformType}
            onChange={(e) => setPlatformType(e.target.value)}
          />
        </div>
        <div className="Button_Field">
          <Global_Button 
            Text={t('Add platform')}
            onClick={addNewPlatform}
          />
        </div>
      </form>
    </div>
  )
};

export default Platforms;