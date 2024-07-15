import { getAuth, updateProfile } from "firebase/auth";
// import { doc, updateDoc } from "firebase/firestore";
// import {db} from "../firebase"
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [changDetails, setChangeDetails] = useState(false);
    const [formData, setFromData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });
    const { name, email } = formData;

    function onLogOut() {
        auth.signOut();
        navigate("/");
    }

    function onChange(e) {
        setFromData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    async function onSubmit() {
        try {
            if (auth.currentUser.displayName !== name) {
                await updateProfile(auth.currentUser, {
                    displayName: name
                });

                // const docRef = doc(db, "user", auth.currentUser.uid);
                // await updateDoc(docRef, {
                //     name,
                // })
            }
            toast.success("Your Profile is Updated");
        } catch (error) {
            toast.error("Could not update your Profile");
        }
    }
    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-4xl font-bold text-center mt-6">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6 px-3">
                    <form action="">
                        <input onChange={onChange} type="text" name="" id="name" value={name} disabled={!changDetails} className={`w-full text-xl text-gray-700 px-4 py-2 bg-white border border-gray-300 rounded transition ease-in-out ${changDetails && "bg-red-200 focus:bg-red-200"}`} />

                        <input type="email" name="" id="email" value={email} disabled className={`my-6 w-full text-xl text-gray-700 px-4 py-2 bg-white border border-gray-300 rounded transition ease-in-out`} />

                        <div className="flex justify-between text-lg md:text-sm">
                            <p>Do you want to update your Profile?
                                <span
                                    onClick={() => {
                                        changDetails && onSubmit()
                                        setChangeDetails((prevState) => !prevState)
                                    }}
                                    className="text-red-600 hover:text-red-700 transition ease-in-out cursor-pointer">
                                    {changDetails ? "Apply Changes" : "Edit"}
                                </span>
                            </p>
                            <p onClick={onLogOut} className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer">Sign Out</p>
                        </div>
                    </form>
                    <div className="">
                        <Link to={"/"} >
                            <h1 className="flex justify-center gap-4 items-center text-3xl font-bold bg-orange-500 hover:bg-orange-600 tansition duration-200 ease-in-out cursor-pointer text-center p-3 mt-8 rounded-lg text-white">Go to Home <FaHome /> </h1>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;