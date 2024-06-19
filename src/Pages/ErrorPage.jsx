import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="w-full relative ">
            <h1 className="text-7xl text-red-500 font-bold absolute left-[40%] top-60">4<span className="text-yellow-500">0</span>4</h1>
            <img className="mx-auto" src="error.jpg" alt="" />
            <p className="text-4xl text-center">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl text-center">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/'> <button  className="btn text-lg font-bold outline outline-yellow-500 bg-white hover:outline-none hover:text-white hover:bg-yellow-500 ml-[46%] mt-6">Go Home</button></Link>
        </div>
    );
}