import { Marquee } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
export const AdventurePhoto = () => {
    return (
        <div className="flex flex-col gap-5 px-5 lg:gap-10">
            <div className="flex flex-col gap-3 lg:gap-6">
                {' '}
                <h3 className="text-2xl text-nowrap lg:text-6xl">
                    Photos from <strong>our trips</strong>
                </h3>
                <p className="text-lg text-wrap text-gray-500 lg:text-2xl">
                    We not only organize your trips, but very often take a part of it
                    <br className="hidden lg:flex" /> to maximize your experience.
                </p>
            </div>
            <MarqueeDemo />
        </div>
    );
};

export default AdventurePhoto;

const reviews = [
    {
        name: 'Jack',
        username: '@jack',
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: '/cities/trip_1.jpg',
    },
    {
        name: 'Jill',
        username: '@jill',
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: '/cities/trip_2.jpg',
    },
    {
        name: 'John',
        username: '@john',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_3.jpg',
    },
    {
        name: 'Jane',
        username: '@jane',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_4.jpg',
    },
    {
        name: 'Jenny',
        username: '@jenny',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_5.jpg',
    },
    {
        name: 'James',
        username: '@james',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_6.jpg',
    },
    {
        name: 'James',
        username: '@james',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_7.jpg',
    },
    {
        name: 'James',
        username: '@james',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_8.jpg',
    },
    {
        name: 'James',
        username: '@james',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_9.jpg',
    },
    {
        name: 'James',
        username: '@james',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: '/cities/trip_10.jpg',
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
    return (
        <figure
            className={cn(
                'relative h-56 w-96 cursor-pointer overflow-hidden rounded-xl',
                // light styles
                'bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                // dark styles
                'dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="h-full w-full rounded-xl object-cover" alt="" src={img} />
                {/* <div className="abs flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div> */}
            </div>
            {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                ))}
            </Marquee>
            {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div> */}
            {/* <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div> */}
        </div>
    );
}
