import { Header, TabBar, Search, Card } from "../Components";
import { useEffect, useState } from "react";
import { useUser,useData } from "../contexts";
import { usePathName } from "../hooks";
export const Home = () => {
  const [isYour, setIsYour] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [last, setLast] = useState(10);

  const { pathURL } = usePathName();
  const { loginData} = useUser();
  const {cardDataState,cardDataDispatch} = useData()
  

  useEffect(() => {
    (() => {
      if (pathURL === "/your" || pathURL === "/home") {
        setIsYour(true);
        setIsAll(false);
        setIsBlocked(false);
        const data = cardDataState.response.filter(
          (card) => card.owner_id === loginData[0].id
        );
        cardDataDispatch ({ type: "FILTER_CARD_BY_OWNER_ID", payload: { response:data } });
      } else if (pathURL === "/all") {
        setIsAll(true);
        setIsYour(false);
        setIsBlocked(false);
        cardDataDispatch ({ type: "ALL_CARD", payload: { response:cardDataState.response } });
      } else if (pathURL === "/blocked") {
        setIsBlocked(true);
        setIsYour(false);
        setIsAll(false);
        cardDataDispatch ({ type: "ALL_CARD", payload: { response:cardDataState.response } });
      }
    })();
    // eslint-disable-next-line 
  }, [pathURL]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (isBottom) {
      setLast(prev=>prev+10)
    }
  }, [isBottom]);

  const handleScroll=()=> {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;
    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight){
      setIsBottom(prev=>!prev);
    }
  }

  return (
    <>
      <div>
        <Header />
        <TabBar your={isYour} all={isAll} blocked={isBlocked} />
        <Search />
      </div>

      <div className="flex flex-wrap ">
        {cardDataState.response.slice(0,last)
          .map(
            ({
              budgetName,
              name,
              spent,
              available_to_spend,
              card_type,
              expiry,
              currency,
              limit,
              id,
            }) => {
              return (
                <Card
                  key={id}
                  budgetName={budgetName}
                  name={name}
                  spent={spent}
                  available_to_spend={available_to_spend}
                  cardType={card_type}
                  expiry={expiry}
                  currency={currency}
                  limit={limit}
                />
              );
            }
          )}
      </div>
    </>
  );
};
