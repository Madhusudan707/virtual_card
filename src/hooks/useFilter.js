import { useData } from "../contexts";

export const useFilter = () => {
  const { cardDataState, cardDataDispatch } = useData();

  const filterHandler = (filterStr) => {
   
    if (filterStr === "SUBSCRIPTION" || filterStr === "BURNER") {
       
      const filterData = cardDataState.data.filter(
          
        (card) => card.card_type === filterStr
      );

      console.log(filterData)
      cardDataDispatch({
        type: "FILTER_CARD_BY_TYPE",
        payload: { response: filterData },
      });
    } else {
      cardDataDispatch({
        type: "ON_SUCCESS",
        payload: [...cardDataState.data],
      });
    }
  };

  return { filterHandler };
};
