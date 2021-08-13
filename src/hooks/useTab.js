import { useState, useEffect } from "react";
import { useData, useUser } from "../contexts";
import { usePathName } from ".";

export const useTab = () => {
  const [isYour, setIsYour] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const { cardDataState, cardDataDispatch } = useData();
  const { loginData } = useUser();
  const { pathURL } = usePathName();

  console.log(pathURL);
  useEffect(() => {
    (() => {
      console.log(pathURL);
      if (pathURL === "/your" || pathURL === "/home") {
        setIsYour(true);
        setIsAll(false);
        setIsBlocked(false);
        const data = cardDataState.response.filter(
          (card) => card.owner_id === loginData[0].id
        );
        cardDataDispatch({
          type: "FILTER_CARD_BY_OWNER_ID",
          payload: { response: data },
        });
      } else if (pathURL === "/all") {
        setIsAll(true);
        setIsYour(false);
        setIsBlocked(false);
        cardDataDispatch({
          type: "ALL_CARD",
          payload: { response: cardDataState.response },
        });
      } else if (pathURL === "/blocked") {
        setIsBlocked(true);
        setIsYour(false);
        setIsAll(false);
        cardDataDispatch({
          type: "ALL_CARD",
          payload: { response: cardDataState.response },
        });
      }
    })();
    // eslint-disable-next-line
  }, [pathURL]);

  return { isYour, isAll, isBlocked, cardDataState };
};