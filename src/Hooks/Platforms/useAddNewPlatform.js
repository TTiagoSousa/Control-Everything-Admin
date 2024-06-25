import { useTranslation } from "react-i18next";
import { NavsState } from "../../Context/Navs_Context";
import http from "../../Services/httpService";
import { useState } from "react";

const useAddNewPlatform = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const [ platformName, setPlatformName ] = useState('');
  const [ platformImage, setPlatformImage ] = useState('');
  const [ platformWebSite, setPlatformWebSite ] = useState('');
  const [ platformType, setPlatformType ] = useState('');

  const addNewPlatform = async () => {

    if (!platformName || !platformImage || !platformWebSite || !platformType) {
      setAlert({
        open: true,
        message: t("All fields must be filled"),
        type: 'error'
      });

      return;
    }

    try{

      const response = await http.post('platforms/add-new-platform', {
        name: platformName,
        image: platformImage,
        website: platformWebSite,
        type: platformType,
      })

      setAlert({
        open: true,
        message: t('Platform created successfully'),
        type: 'success',
      });

    }catch (error) {
      if (error.response && error.response.status === 502) {
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
    addNewPlatform,
    platformName, setPlatformName,
    platformImage, setPlatformImage,
    platformWebSite, setPlatformWebSite,
    platformType,setPlatformType
  }

}

export default useAddNewPlatform;