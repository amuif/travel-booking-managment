import { TUser } from '@/types/users';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote } from 'lucide-react';
import { useMemo, useState } from 'react';

interface reviewDataProps {
    id: number;
    comment: string;
}

export const reviewData: reviewDataProps[] = [
    {
        id: 1,
        comment: 'Absolutely breathtaking! The sunrise balloon ride over Cappadocia was like a dream. A must-do for any travel lover.',
    },
    {
        id: 2,
        comment: 'The sushi cruise in Tokyo was unforgettable. Delicious food and a magical cityscape at night.',
    },
    {
        id: 3,
        comment: 'Dubai’s desert safari was wild! Dune bashing was thrilling and the Bedouin dinner was delicious.',
    },
    {
        id: 4,
        comment: 'Hawassa was a hidden gem. The lake, birds, and coffee ceremony made it a peaceful retreat.',
    },
    {
        id: 5,
        comment: 'Everything was so well organized! We had the time of our lives exploring each destination.',
    },
    {
        id: 6,
        comment: 'Great service and amazing views. Hawassa is perfect for a weekend getaway.',
    },
    {
        id: 7,
        comment: 'Cappadocia looked like something out of a movie! I couldn’t stop taking pictures.',
    },
    {
        id: 8,
        comment: 'Tokyo’s nightlife is unmatched. The sushi cruise is a total vibe.',
    },
    {
        id: 9,
        comment: 'The entire experience felt luxurious yet authentic. Highly recommend it to anyone looking for adventure!',
    },
    {
        id: 10,
        comment: 'From city lights to sandy deserts—every moment was unforgettable.',
    },
];

const Reviews = ({ users }: { users: TUser[] }) => {
    const [emblaRef] = useEmblaCarousel();
    const [isDragging, setIsDragging] = useState(false);
    const getRandomInt = () => Math.floor(Math.random() * reviewData.length);

    const userComments = useMemo(() => {
        return users.map((user) => {
            const randomComment = reviewData[getRandomInt()].comment;
            return { ...user, comment: randomComment };
        });
    }, [users]);
    return (
        <div className="px-5 py-5">
            <div className="flex flex-col gap-3 lg:gap-6">
                <h3 className="text-2xl text-nowrap lg:text-6xl">
                    Our Happy <strong> Friends say </strong>{' '}
                </h3>
                <p className="text-lg text-wrap text-gray-500 lg:text-2xl">
                    Here are their responses regarding the travel services <br className="hidden lg:flex" /> we offer for their vacations.
                </p>
            </div>
            <div className="embla w-full overflow-hidden py-5" ref={emblaRef}>
                <div className="embla__container flex pl-4">
                    {userComments.map((user) => (
                        <div
                            key={user.id}
                            className="embla__slide shadow-2xl/50 mx-2 flex w-full flex-col flex-wrap rounded-2xl bg-white lg:w-1/3 lg:flex-row"
                        >
                            <div
                                draggable
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={() => setIsDragging(false)}
                                onMouseLeave={() => setIsDragging(false)}
                                className={`relative flex flex-col gap-5 rounded-xl p-4 lg:gap-7 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} `}
                            >
                                <div className="text-primary absolute -top-2 -right-4 size-14">
                                    <Quote className="" />
                                </div>
                                <p className="text-2xl">{user.comment}</p>
                                <div className="bottom-0 flex h-full items-end justify-start">
                                    <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
                                        <img
                                            src={user.profile_img}
                                            alt={`${user.name} profile image`}
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <p className="text-start font-bold">{user.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
