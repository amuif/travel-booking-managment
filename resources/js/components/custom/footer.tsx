export const Footer = () => {
    return (
        <div className="flex flex-col space-y-5 pt-6 pb-5 lg:pt-10">
            <hr />
            <div className="flex items-center justify-between px-5 whitespace-nowrap">
                <div className="flex flex-col items-center justify-start gap-3">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <h2 className="text-left text-xl font-extrabold lg:text-3xl">
                            Tour <strong className="text-primary">nest</strong>
                        </h2>
                        <p className="text-base text-gray-500">We always provide the best service for our customers</p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-end gap-5 whitespace-nowrap">
                    <h4 className="text-center text-lg font-black">About us</h4>
                    <menu className="flex gap-4">
                        <li>
                            <a href="/about">Why us?</a>
                        </li>
                        <li>
                            <a href="/about">Our team</a>
                        </li>
                        <li>
                            <a href="/blogs">Expert's blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact us</a>
                        </li>
                    </menu>
                </div>
            </div>
        </div>
    );
};
