import { Link } from "react-router-dom";
import { Logout } from "..";
export const TabBar = ({
  tabClick,
  your = false,
  all = false,
  blocked = false,
  cardCount
}) => {
  return (
    <div className="flex w-full p-3 border-b-2">
      <div className="flex justify-start">
        <ul className="flex" onClick={tabClick}>
          <li className={`p-2 ${your ? "border-b-2 border-red-500" : ""}`}>
            <Link to="/your">Your</Link>
          </li>
          <li className={`p-2 ${all ? "border-b-2 border-red-500" : ""}`}>
            <Link to="/all">All</Link>
          </li>
          <li className={`p-2 ${blocked ? "border-b-2 border-red-500" : ""}`}>
            <Link to="/blocked">Blocked</Link>
          </li>
         
        </ul>
      
      </div>
      {/* <p className='flex items-center  justify-center w-16 h-4 text-center rounded-md bg-pink-500 font-bold text-white border' style={{fontSize:"8px"}}>Count: {cardCount}</p> */}
      <div>
     
      </div>
      <div className="flex items-center justify-end w-full">
        <ul className="flex items-center ">
          <li>
          <Logout/>
          </li>
          <li>
            <a href="#!" className="cursor-not-allowed">
              <i className="fas fa-th-large p-2"></i>
            </a>
          </li>
          <li>
            <a href="#!" className="cursor-not-allowed">
              <i className="fas fa-bars p-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
