import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [formData, setFromData] =useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });
    const {name, email} = formData;

    function onLogOut(){
        auth.signOut();
        navigate("/");
    }
    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-4xl font-bold text-center mt-6">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6 px-3">
                    <form action="">
                        <input type="text" name="" id="name" value={name} disabled className="w-full text-xl text-gray-700 px-4 py-2 bg-white border border-gray-300 rounded transition ease-in-out"/>

                        <input type="email" name="" id="email" value={email} disabled className="my-6 w-full text-xl text-gray-700 px-4 py-2 bg-white border border-gray-300 rounded transition ease-in-out"/>
                        
                        <div className="flex justify-between text-lg md:text-sm">
                            <p>Do you want to update your Profile? 
                                <span className="text-red-600 hover:text-red-700 transition ease-in-out cursor-pointer"> Edit</span>
                            </p>
                            <p onClick={onLogOut} className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer">Sign Out</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Profile;