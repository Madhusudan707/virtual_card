import { useRef } from "react";
import { Header, TabBar, Search, Card } from "../Components";
import { useInfiniteScroll, useTab } from "../hooks";
import { useData } from "../contexts";

export const Home = () => {
  const targetRef = useRef(null);
  const { isYour, isAll, isBlocked, cardCount } = useTab();
  const { cardDataState } = useData();
  const { last } = useInfiniteScroll(targetRef);

  return (
    <>
      <div className="fixed w-full bg-white z-50">
        <Header />

        <TabBar
          your={isYour}
          all={isAll}
          blocked={isBlocked}
          cardCount={cardCount}
        />

        <Search />
      </div>

      <div className="flex flex-wrap py-56 ">
        {cardDataState.response
          .slice(0, last)
          .map(
            ({
              budget_name,
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
                  budgetName={budget_name}
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
      <div ref={targetRef} className="flex justify-center -mt-44">
        Loading...
      </div>
    </>
  );
};
