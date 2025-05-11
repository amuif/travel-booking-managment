import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const WhatWeDo = () => {
    return (
        <div className="flex flex-col gap-5 px-5 lg:flex-row">
            <div className="order-1 flex flex-col gap-5 lg:order-2 lg:w-1/2 lg:gap-7">
                <div className="flex flex-col gap-3">
                    <span className="font-extrabold uppercase">What we do</span>
                    <h3 className="text-2xl lg:text-6xl">
                        Make Your Tour <br />
                        <strong>Fun And Memorable</strong>{' '}
                    </h3>
                </div>
                <p className="text-lg text-wrap text-gray-500 lg:text-2xl">
                    Your passion is what drives us. Whatever you want to hunt for rare truffles in Tuscany, track the Great Migration on a mobile
                    camping safari, or learn aboriginal art from a Maori chief in New Zeland - we know how to make your dreams comes true.
                </p>
                <Link href="/explore">
                    <Button size="lg" className="shadow-xl/30 bottom-0 mt-6 flex w-fit cursor-pointer p-7 text-2xl">
                        Let's explore
                    </Button>
                </Link>
            </div>
            <div className="order-2 lg:order-1">
                <img
                    src="cities/book.jpg"
                    alt="Our service Photo"
                    className="shadow-xl/30 h-64 w-72 rounded-xl object-cover lg:h-[500px] lg:w-[600px]"
                />
            </div>
        </div>
    );
};

export default WhatWeDo;
