import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const OAuth = () => {
    return (
        <div className="w-full">
            <button className="flex justify-center items-center text-white font-medium uppercase w-full py-2 bg-red-600 rounded-lg gap-2 active:bg-red-800">
                <FcGoogle className="bg-white rounded-full text-xl" />
                Continue With Google
            </button>
            <button className="flex mt-2 justify-center items-center text-white font-medium uppercase w-full py-2 bg-red-600 rounded-lg gap-2 active:bg-red-800">
                <FaGithub className="rounded-full text-xl" />
                Continue With Github
            </button>
        </div>
    );
};

export default OAuth;