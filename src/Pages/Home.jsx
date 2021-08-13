import { Header, TabBar, Search, Card } from "../Components";
import { useInfiniteScroll, useTab } from "../hooks";

export const Home = () => {
  const { last } = useInfiniteScroll();
  const { isYour, isAll, isBlocked, cardDataState, cardCount } = useTab();

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
    </>
  );
};
