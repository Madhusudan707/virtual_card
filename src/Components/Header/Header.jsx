export const Header = () => {
  return (
    <div className="flex w-full justify-between items-center shadow-md   p-3">
      <h1>
        <span className="lg:text-2xl font-bold">Virtual Cards</span>
        <span className=" p-2 text-blue-500">
          <i className="fas fa-video "></i> &nbsp;
          <a href="#!" className="cursor-not-allowed text-xs">
            Learn more
          </a>
        </span>
      </h1>
      <button className="shadow-md p-2 cursor-not-allowed">
        <i className="fas fa-plus p-2 "></i>Virtual Card
      </button>
    </div>
  );
};
