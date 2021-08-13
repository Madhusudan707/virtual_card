import { useState } from "react";
import {useFilter,useReset} from '../../hooks'
export const Filter = () => {
    const [isShowFilterMenu,setIsShowFilterMenu] = useState(false)
    const {filterHandler} = useFilter()
    const {isChecked} = useReset()
  return (
    <>
      <button className="shadow-sm" onClick={()=>{setIsShowFilterMenu(prev=>!prev)}}>
        <i className="fas fa-sort-amount-down-alt  p-2">&nbsp;Filter</i>
      </button>
      <div className={`flex flex-col w-64 absolute right-4 z-10 border bg-white p-2 ${isShowFilterMenu?"":"hidden "}`}>
     
           
            
        <div className="flex mb-4 items-center">
        <i className="fas fa-times absolute right-4 cursor-pointer" onClick={()=>{setIsShowFilterMenu(prev=>!prev)}}></i>
          <span>Type</span>
        </div>
            <div className="flex   text-sm">
          
          <div className="flex p-2 ">
            <input type="checkbox" className="mt-1"  onClick={(e)=>{filterHandler(e.target.checked?e.target.value:"")}}
            checked={isChecked} value='SUBSCRIPTION' />
            <label> &nbsp;Subscription</label>
          </div>
          <div className="flex p-2 items-center ">
            <input type="checkbox" className="mt-1" onClick={(e)=>{filterHandler(e.target.checked?e.target.value:"")}}
            checked={isChecked} value='BURNER' />
            <label> &nbsp;Burner</label>
          </div>
        </div>
      </div>
    </>
  );
};
