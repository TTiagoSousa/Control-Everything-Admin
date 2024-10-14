import { NavsState } from "../../Contexts/Navs_Context";
import { DataBaseState } from "../../Contexts/DataBase_Context";
import http from "../../Services/httpService";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const useAddNewAutorizedBroker = () => {

  const { t } = useTranslation();
  const { setAlert } = NavsState();
  const { authenticated, userId } = DataBaseState();

  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [webSite, setWebSite] = useState('');
  const [type, setType] = useState('');

  const addNewAutorizedBroker = async () => {

    if (!name || !logo || !webSite || !type) {
      setAlert({
        open: true,
        message: t("All fields must be filled in"),
        type: 'error'
      });

      return;
    }

    try {
      const brokerData = {
        name,
        logo,
        website: webSite,
        type
      };

      // Fazendo a requisição POST para a API com os dados fornecidos
      const response = await http.post(`autorized-broker-api/${userId}/add-new-broker`, brokerData);

      if (response.status === 200) {

        setAlert({
          open: true,
          message: t('Broker added successfully'),
          type: 'success',
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      // Tratamento de erro
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
  };

  return {
    name, setName,
    logo, setLogo,
    webSite, setWebSite,
    type, setType,
    addNewAutorizedBroker
  };
};