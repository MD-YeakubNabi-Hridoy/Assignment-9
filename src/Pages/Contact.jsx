
const Contact = () => {
    return (
        <div className="lg:mt-10">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight text-black lg:text-5xl"> Lets talk!</h2>
                        <div className="text-gray-700">Are you looking for a dream house?</div>
                    </div>
                    <img src="contact.jpg" alt="" className="mr-6 h-52 md:h-64 lg:h-72" />
                </div>
                <form noValidate="" className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-lg text-black">Full name :</label>
                        <input id="name" type="text" placeholder="Your Name Here..." className="w-full p-3 text-black rounded-lg border-2 border-orange-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-lg text-black">Email</label>
                        <input id="email" type="email" placeholder="Your Email Here..." className="w-full p-3 text-black rounded-lg border-2 border-orange-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-lg text-black">Message</label>
                        <textarea id="message" rows="3" placeholder="type your message here..." className="w-full p-3 text-black rounded-lg border-2 border-orange-500"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-orange-500">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;