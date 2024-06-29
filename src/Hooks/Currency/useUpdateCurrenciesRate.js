import { useTranslation } from "react-i18next";
import { NavsState } from "../../Context/Navs_Context";
import http from "../../Services/httpService";
import { useState } from "react";

const useUpdateCurrenciesRate = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const [ updateRate, setUpdateRate ] = useState('');
  const [ updateRateLoading, setUpdateRateLoading ] = useState(false)

  const updateCurrenciesRate = async () => {

    setUpdateRateLoading(true)

    try{

      const response = await http.patch('currency/update-currencies-rate')

      console.log(response)

      setAlert({
        open: true,
        message: 'Transition created successfully',
        type: 'success',
      });

      setUpdateRateLoading(false)

    }catch (error) {
      setUpdateRateLoading(false)
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
    updateCurrenciesRate,
    updateRate, setUpdateRate,
    updateRateLoading, setUpdateRateLoading
  }

}

export default useUpdateCurrenciesRate;