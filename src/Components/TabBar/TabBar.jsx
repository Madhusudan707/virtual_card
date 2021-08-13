import { Link } from "react-router-dom"


export const TabBar = ({tabClick,your=false,all=false,blocked=false}) => {
    return (
        <div className='flex w-full p-3 border-b-2'>
            <div className='flex justify-start'>
                <ul className='flex' onClick={tabClick}>
                    <li className={`p-2 ${your?"border-b-2 border-red-500":""}`}><Link to="/your" >Your</Link></li>
                    <li className={`p-2 ${all?"border-b-2 border-red-500":""}`}><Link to="/all" >All</Link></li>
                    <li className={`p-2 ${blocked?"border-b-2 border-red-500":""}`}><Link to="/blocked" >Blocked</Link></li>
                </ul>
            </div>
            <div className='flex justify-end w-full'>
                <ul className='flex'>
                    <li><a href='#!'><i className="fas fa-th-large p-2"></i></a></li>
                    <li><a href='#!'><i className="fas fa-bars p-2"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
