import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../Images/Images'

const Header = (props) => {
    
    const handleLogout = () => {
        props.setUser({
            name: "",
            email: "",
            pass:""
        })
        button = <div><Link to="/login" className="no-underline "><button className="border-2 border-slate-500 mx-3 hover:bg-white hover:text-black text-white p-3 rounded-2xl  cursor-default">Log In</button></Link><Link className='no-underline' to="/register"><button className="border-2 border-slate-500 mx-3 hover:bg-white hover:text-black text-white p-3 rounded-2xl cursor-default">Register</button></Link></div>
    }
    
    let button;
    if (props.user.name === "") {
        button = <div><Link to="/login" className="no-underline "><button className="border-2 border-slate-500 mx-3 hover:bg-white hover:text-black text-white p-3 rounded-2xl  cursor-default">Log In</button></Link><Link className='no-underline' to="/register"><button className="border-2 border-slate-500 mx-3 hover:bg-white hover:text-black text-white p-3 rounded-2xl cursor-default">Register</button></Link></div>
    }
    else {
        button = <div className='flex justify-center items-center'><p className="font-semibold text-lg text-white">{props.user.name}</p><button onClick={handleLogout} className="border-2 border-slate-500 mx-3 hover:bg-white hover:text-black text-white p-3 rounded-2xl cursor-default">Logout</button></div>
    }

    return (
        <header className="bg-[#47B884] flex justify-around items-center">
            <nav className="flex justify-around items-center w-[99.9%]">
                <div className="flex justify-center items-center" >
                    <Link to="/" className="flex justify-center items-center">
                        <img src={Images.logo} className='w-28 h-28' alt="Logo" />
                        <p className="font-semibold text-white no-underline text-lg">Olympic Pulse</p>
                    </Link>
                </div>
                <ul className="flex justify-center items-center">
                    <li className="text-white list-none p-2 m-1 hover:text-[#6D6D6D] text-lg"><Link to="/" className="no-underline">Home</Link></li>
                    <li className="text-white list-none p-2 m-1 hover:text-[#6D6D6D] text-lg"><Link to="/ai" className="no-underline">Olympic Buddy</Link></li>
                    <li className="text-white list-none p-2 m-1 hover:text-[#6D6D6D] text-lg"><Link to="/schedule" className="no-underline">Schedule</Link></li>
                    <li className="text-white list-none p-2 m-1 hover:text-[#6D6D6D] text-lg"><Link to="/medal" className="no-underline">Medal Table</Link></li>
                    <li className="text-white list-none p-2 m-1 hover:text-[#6D6D6D] text-lg"><Link to="/contact" className="no-underline">Contact Us</Link></li>
                </ul>
                <div className='flex justify-center items-center'>  
                        {button}
                </div>
            </nav>
        </header>
    )
}

export default Header