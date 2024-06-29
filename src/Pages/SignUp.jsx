import { CgEye } from "react-icons/cg";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import OAuth from "../Components/OAuth/OAuth";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFromData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;
    function onChange(e) {
        setFromData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    return (
        <div className="flex flex-col justify-center items-center h-[81vh]">
            <div className="w-96 flex flex-col items-center border-2 border-orange-400 p-5 rounded-xl bg-orange-50">
                <div className="text-4xl font-bold text-orange-500"> Sign Up</div>
                <form action="" >
                    <input
                        onChange={onChange}
                        value={name}
                        className="w-full mt-6 px-5 py-2 bg-orange-50 outline-none border-2 border-orange-400 rounded-lg "
                        type="text"
                        name="Text"
                        id="name"
                        placeholder="Your Full Name Here..." />
                    <input
                        onChange={onChange}
                        value={email}
                        className="w-full mt-4 px-5 py-2 bg-orange-50 outline-none border-2 border-orange-400 rounded-lg "
                        type="email"
                        name="Email"
                        id="email"
                        placeholder="Your Email Here..." />
                    <div className="relative">
                        <input
                            onChange={onChange}
                            value={password}
                            type={showPassword ? "text" : "password"}
                            className="w-full my-4 px-5 py-2 bg-orange-50 outline-none border-2 border-orange-400 rounded-lg "
                            name="Password"
                            id="password"
                            placeholder="Your Password Here..." />
                        {showPassword ? (<IoMdEyeOff className="absolute text-xl right-3 top-7 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)} />) : (<CgEye className="absolute text-xl right-3 top-7 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)} />)}
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Have an account? <Link className="text-lg text-orange-500" to='/login'>Sign In</Link></p>
                        <div className="text-center text-sm underline text-blue-500" >
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <input className="py-2 mt-4 w-full bg-orange-500 text-white text- cursor-pointer font-medium uppercase rounded-lg active:bg-orange-700 " type="submit" value="Register" />
                </form>
                <div>
                    <p className="mx-4 text-center">OR</p>
                </div>
                <OAuth />
            </div>

        </div>
    );
};

export default SignUp;