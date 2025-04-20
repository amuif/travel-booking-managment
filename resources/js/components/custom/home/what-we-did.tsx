interface customerRateProps {
    id: number;
    rating: string;
    description: string;
}
export const customerRate: customerRateProps[] = [
    {
        id: 1,
        rating: '25K',
        description: 'Thousands of satisfied guests',
    },
    {
        id: 2,
        rating: '100',
        description: 'Company who working with us',
    },
    {
        id: 3,
        rating: '500',
        description: 'The best place you can visit',
    },
    {
        id: 4,
        rating: '30',
        description: 'Various types of trips for you',
    },
];

const WhatWeDid = () => {
    return (
        <div className="flex flex-col gap-5 px-5 lg:flex-row">
            <div className="order-2 flex flex-col gap-5 lg:order-1 lg:w-1/2 lg:gap-7">
                <div className="flex flex-col gap-3">
                    <span className="font-extrabold uppercase">What we did</span>
                    <h3 className="text-2xl lg:text-6xl">
                        We Always Provide <br />
                        <strong>The Best Service</strong>{' '}
                    </h3>
                </div>
                <p className="text-lg text-wrap text-gray-500 lg:text-2xl">
                    We have been established for more than 10 years to provide a best trip holiday.
                </p>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {customerRate.map(({ id, rating, description }) => (
                        <div key={id}>
                            <p className="text-primary text-2xl font-extrabold lg:text-5xl">{rating}+</p>
                            <p className="text-xl font-bold">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <img
                    src="cities/service.jpg"
                    alt="Our service Photo"
                    className="shadow-xl/30 h-64 w-72 rounded-xl object-cover lg:h-[500px] lg:w-[600px]"
                />
            </div>
        </div>
    );
};

export default WhatWeDid;
