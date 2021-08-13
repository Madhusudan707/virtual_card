import { useState } from "react";
import { useData } from "../contexts";



export const useReset = () => {
  const [isChecked, setIsChecked] = useState();
  const { cardDataDispatch,cardDataState } = useData();
  
  const resetHandler = async () => {
    setIsChecked(false);

    try {
        cardDataDispatch({
            type: "ON_SUCCESS",
            payload: [...cardDataState.data]
          });
    } catch (err) {
        cardDataDispatch({ type: "ON_FAILURE" });
    }
    setIsChecked();
  };

  return{resetHandler,isChecked}
};
