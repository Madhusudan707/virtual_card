import { useData } from "../contexts";

export const useSearch = () => {
  const { cardDataState, cardDataDispatch } = useData();

  const search = async (search_string) => {
    if (search_string) {
      const data = cardDataState.data.filter((card) => {
        const response = card.name
          .toUpperCase()
          .includes(search_string.toUpperCase());
        if (response) {
          return card;
        }
        return null;
      });

      cardDataDispatch({ type: "ON_SEARCH", payload: { response: data } });
    } else {
      cardDataDispatch({
        type: "ON_SUCCESS",
        payload: [...cardDataState.data],
      });
    }
  };

  return { search };
};
