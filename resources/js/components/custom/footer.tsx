export const Footer = () => {
    return (
        <div className="mb-10 flex flex-col space-y-5 pt-6 lg:pt-10">
            <hr />
            <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-start gap-3">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <h2 className="text-left text-xl font-extrabold lg:text-3xl">
                            Tour <strong className="text-primary">nest</strong>
                        </h2>
                        <p className="text-base text-gray-500">We always provide the best service for our customers</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h4 className="text-center text-lg font-black">Top Destinations</h4>
                    <menu className="flex flex-col gap-4">
                        <li>Hawassa,Ethiopia</li>
                        <li>Dubai,UAE</li>
                        <li>New york,USA</li>
                        <li>Paris,France</li>
                    </menu>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h4 className="text-center text-lg font-black">Products</h4>
                    <menu className="flex flex-col gap-4">
                        <li>Packages</li>
                        <li> Tours</li>
                        <li>Hotels</li>
                        <li>Flys</li>
                    </menu>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h4 className="text-center text-lg font-black">About us</h4>
                    <menu className="flex flex-col gap-4">
                        <li>Why us?</li>
                        <li>Our team</li>
                        <li>Expert's blog</li>
                        <li>Contact us</li>
                    </menu>
                </div>
            </div>
        </div>
    );
};
