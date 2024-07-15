import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
// import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
    const navigate = useNavigate();
    async function onGoogleClick(){
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            // const user = result.user;
            toast.success("SignIn with google Successfully");
            navigate("/");
            // const docRef = doc(db , "user", user.uid);
            // const docSnap = await getDoc(docRef);

            // if(!docSnap.exists){
            //     await setDoc(docRef, {
            //         name : user.displayName,
            //         email : user.email,
            //         timestamp : serverTimestamp(),
            //     });
            // }
        } catch (error) {
            toast.error("Could not authorized by Google");
        }
    }
    return (
        <div className="w-full">
            <button onClick={onGoogleClick} className="flex justify-center items-center text-white font-medium uppercase w-full py-2 bg-red-600 rounded-lg gap-2 active:bg-red-800">
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