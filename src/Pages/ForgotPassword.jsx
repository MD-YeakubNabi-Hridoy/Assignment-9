import { Link } from "react-router-dom";
import { useState } from "react";
import OAuth from "../Components/OAuth/OAuth";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    function onChange(e) {
        setEmail(e.target.value);
    }
    return (
        <div className="flex flex-col justify-center items-center h-[81vh]">
            <div className="w-[400px] flex flex-col gap-2 items-center border-2 border-orange-400 p-6 rounded-xl bg-orange-50">
                <div className="text-3xl text-orange-500">Forgot Password</div>
                <form action="" className="w-full">
                    <input
                    onChange={onChange}
                    value={email}
                    className="w-full mt-4 px-5 py-2 bg-orange-50 outline-none border-2 border-orange-400 rounded-lg " 
                    type="email" 
                    name="Email" 
                    id="email" 
                    placeholder="Your Email Here..." />
                    <div className="flex mt-4 justify-between items-center">
                        <p className="text-sm">Do not have an account? <Link className="text-lg text-orange-500" to='/signup'>Register</Link></p>
                        <div className="text-center text-sm underline text-blue-500" >
                            <Link to="/login">Sign in instead</Link>
                        </div>
                    </div>
                    <input className="py-2 mt-4 w-full bg-orange-500 text-white text- cursor-pointer font-medium uppercase rounded-lg active:bg-orange-700 " type="submit" value="Send reset password" />
                </form>
                <div>
                    <p className="mx-4 text-center">OR</p>
                </div>
                <OAuth/>
            </div>

        </div>
    );
};

export default ForgotPassword;