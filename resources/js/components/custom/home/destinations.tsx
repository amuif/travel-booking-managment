import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useState } from 'react';
interface destinationDataProps {
    id: number;
    country: string;
    description: string;
    price: number;
    src: string;
}
export const destinationData: destinationDataProps[] = [
    {
        id: 1,
        country: 'Goreme, Turkey',
        src: '/cities/turkey.jpg',
        description: "Sunrise hot air balloon ride over Cappadocia's fairy chimneys ",
        price: 50000,
    },
    {
        id: 2,
        country: 'tokyo,Japan',
        src: '/cities/japan.jpg',
        description: 'Nighttime sushi cruise beneath neon-lit skyscrapers ',
        price: 80000,
    },
    {
        id: 3,
        country: 'dubai,UAE',
        src: '/cities/uae.jpg',
        description: 'Desert safari with sunset dune bashing and Bedouin feast',
        price: 60000,
    },
    {
        id: 4,
        country: 'hawassa,Ethiopia',
        src: '/cities/resort.jpg',
        description: 'Lakeside birdwatching tour with local coffee ceremony',
        price: 2000,
    },
];
const Destinations = () => {
    const [emblaRef] = useEmblaCarousel();
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="flex flex-col gap-5 px-5 py-6 lg:py-10">
            <div className="flex flex-col gap-4 lg:w-1/2">
                <h3 className="text-2xl text-nowrap lg:text-6xl">
                    Top Destination <strong>For you</strong>
                </h3>
                <p className="text-lg text-wrap text-gray-500 lg:text-2xl">
                    Much places suits your mood. Explore somewhere interesting and enjoy the vibes.
                </p>
            </div>
            <div className="embla w-full overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex pl-4">
                    {destinationData.map(({ id, country, description, price, src }) => (
                        <div key={id} className="embla__slide mx-2 flex w-full flex-col flex-wrap lg:w-1/3 lg:flex-row">
                            <div
                                className={`relative h-96 w-full overflow-hidden rounded-lg ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                                draggable
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={() => setIsDragging(false)}
                                onMouseLeave={() => setIsDragging(false)}
                            >
                                <img
                                    src={src}
                                    alt={`${country} photo`}
                                    className="absolute h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-t from-black/70 to-transparent to-40% p-4">
                                    <p className="font-medium text-white">{country}</p>
                                    <p className="line-clamp-2 text-sm font-normal text-white">{description}</p>
                                    <div className="flex gap-4 lg:gap-6">
                                        <p className="mt-1 font-semibold text-white">{price.toLocaleString()} Birr</p>
                                        <Button size="lg" className="bg-primary w-fit p-3">
                                            Book now
                                        </Button>
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

export default Destinations;
