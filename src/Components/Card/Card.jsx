export const Card = ({
  name,
  budgetName,
  cardType,
  expiry,
  spent,
  currency,
  available_to_spend,
  limit,
}) => {
  return (
    <div className="flex ml-1 lg:ml-24 my-2 justify-center  ">
      <div className="flex flex-col w-96 border p-2 shadow-md  ">
        <div className="flex justify-between  ">
          <span className="font-bold">{name}</span>
          <span className="rounded-full h-6 w-6 shadow-md text-center ">
            <i
              className={`text-red-500  ${
                cardType === "BURNER" ? "fab fa-gripfire" : "fas fa-sync-alt"
              }`}
            ></i>
          </span>
        </div>
        <div className="flex justify-between  ">
          <span className="text-sm text-gray-500" style={{ fontSize: "12px" }}>
            {budgetName}
          </span>
        </div>
        <div className="flex justify-between py-2 ">
          <button
            className="shadow-sm border px-1 rounded-sm text-gray-500 capitalize"
            style={{ fontSize: "10px" }}
          >
            {cardType}
          </button>
          <span className="text-sm text-gray-500">
            {cardType === "BURNER" ? `Expires:${expiry}` : `Limit: ${limit}`}
          </span>
        </div>

        <div className="flex bg-green-500 w-full h-3 rounded-md">
          <div
            className="flex bg-pink-500 z-10 rounded-md "
            style={{
              width: `${parseInt((spent * 100) / available_to_spend)}%`,
            }}
          ></div>
        </div>
        <div className="flex justify-between items-center  w-full text-sm">
          <div className="flex items-center">
            <p className="rounded-full h-4 w-4 bg-pink-500"></p>
            <span className="text-sm p-2" style={{ fontSize: "12px" }}>
              Spent
            </span>
          </div>
          <div className="flex">
            {spent} {currency}
          </div>
        </div>

        <div className="flex justify-between items-center  w-full text-sm">
          <div className="flex items-center">
            <p className="rounded-full h-4 w-4 bg-green-500"></p>
            <span className=" p-2 " style={{ fontSize: "12px" }}>
              Available to spend
            </span>
          </div>
          <div className="flex">
            {available_to_spend} {currency}
          </div>
        </div>
      </div>
    </div>
  );
};
