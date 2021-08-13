

import { useUser } from "../../contexts"
import { useNavigate } from "react-router-dom";

export const Logout = () => {
const {setLoginData} = useUser()
const navigate = useNavigate();
    const logout=()=>{
        setLoginData("")
        navigate("/")
    }
    return (
        <div className='flex justify-end ' onClick={logout}>
            <span title='Logout' className="flex item-center justify-center rounded-full h-4 w-4 shadow-md text-center cursor-pointer">
            <i className="fas fa-sign-out-alt fa-1x text-red-500"></i>
          </span> 
        </div>
    )
}
