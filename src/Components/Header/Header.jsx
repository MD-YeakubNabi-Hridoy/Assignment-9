import { NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
    const [pageState, setPageState] = useState("Log In");
    const auth = getAuth();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setPageState("Profile")
            }else{
                setPageState("Log In")
            }
        })
    }, [auth])
    return (
        <div className='px-10 shadow-lg'>
            <header className="p-2">
                <div className="container flex justify-between items-center h-16 mx-auto">
                    <img className="w-32 h-12" src="logo.png" alt="" />
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <RiMenu2Fill />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="flex cursor-pointer">
                            <NavLink to={"/"} className={({ isActive }) => isActive ? 'px-3 py-1 font-semibold  border-b-2 border-yellow-600' : 'px-3 py-1'}>Home</NavLink>
                        </li>
                        <li className="flex cursor-pointer">
                            <NavLink to={"/about"} className={({ isActive }) => isActive ? 'px-3 py-1 font-semibold  border-b-2 border-yellow-600' : 'px-3 py-1'}>About</NavLink>
                        </li>
                        <li className="flex cursor-pointer">
                            <NavLink to={"/contact"} className={({ isActive }) => isActive ? 'px-3 py-1 font-semibold  border-b-2 border-orange-600' : 'px-3 py-1'}>Contact</NavLink>
                        </li>
                        </ul>
                    </div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex cursor-pointer">
                            <NavLink to={"/"} className={({ isActive }) => isActive ? 'px-3 py-1 font-semibold  border-b-2 border-yellow-600' : 'px-3 py-1'}>Home</NavLink>
                        </li>
                        <li className="flex cursor-pointer">
                            <NavLink to={"/about"} className={({ isActive }) => isActive ? 'px-3 py-1 font-semibold  border-b-2 border-yellow-600' : 'px-3 py-1'}>About</NavLink>
                        </li>
                        <li className="flex cursor-pointer">
                            <NavLink to={"/contact"} className={({ isActive }) => isActive ? 'px-3 py-1 font-semibold  border-b-2 border-orange-600' : 'px-3 py-1'}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <NavLink to={"/profile"}>
                        <button className="self-center px-8 py-3 font-bold rounded-lg bg-orange-500 text-white">{pageState}
                        </button></NavLink>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;