import { Trips } from '@/types/trips';
import { Head, Link, usePage } from '@inertiajs/react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
interface PaginatedTrips {
    data: Trips[];
    current_page: number;
    last_page: number;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}

const formatLocation = (value: string | null) => {
    if (!value) return '';
    return value
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
const Flights = () => {
    const { trips, AllTrips } = usePage<{ trips: PaginatedTrips; AllTrips: Trips[] }>().props;
    const [desiredTrips, setDesiredTrips] = useState<Trips[] | null>(null);
    const [places, setPlaces] = useState({
        from: '',
        to: '',
    });
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const fromParam = params.get('from');
        const toParam = params.get('to');
        setPlaces({
            from: formatLocation(fromParam),
            to: formatLocation(toParam),
        });
    }, []);

    useEffect(() => {
        if (places.from && places.to) {
            const desired = AllTrips.filter((trip) => {
                return trip.from_city === places.from && trip.to_city === places.to;
            });
            console.log('desired', desired);
            setDesiredTrips(desired);
        }
    }, [places, AllTrips]);

    //useEffect(() => {
    //    console.log(desiredTrips);
    //}, [desiredTrips]);
    return (
        <div className="flex flex-col gap-5">
            <Head title="Flights" />
            {desiredTrips && (
                <div className="flex flex-col gap-3">
                    {desiredTrips.map((desired) => (
                        <div key={desired.id}>
                            <FlightCard trip={desired} />
                        </div>
                    ))}
                </div>
            )}
            {desiredTrips && desiredTrips?.length > 1 ? (
                <h4 className="mx-auto flex w-full px-3 py-5 text-2xl font-bold lg:w-[90%] lg:pl-5">
                    You can also view the rest of flights down below
                </h4>
            ) : (
                <h4 className="mx-auto flex w-full px-3 py-5 text-2xl font-bold lg:w-[90%] lg:pl-5">
                    We haven't found any trips that is going to {places.to}
                </h4>
            )}
            {trips.data.map((trip) => (
                <div key={trip.id}>
                    <FlightCard trip={trip} />
                </div>
            ))}{' '}
            <div className="mx-auto mt-4 flex items-center justify-center space-x-2">
                {trips.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url ?? ''}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`rounded border px-3 py-1 ${
                            link.active ? 'bg-blue-500 text-white' : 'text-gray-700'
                        } ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Flights;

type TripProps = {
    trip: Trips;
};
export function FlightCard({ trip }: TripProps) {
    const searchParams = new URLSearchParams(window.location.search);
    const adults = searchParams.get('adults');

    const formatDate = (date: string) => {
        return format(new Date(date), 'MMMM dd, yyyy');
    };
    return (
        <div className="mx-auto rounded-lg bg-[#F0F3F5] px-3 py-5 lg:w-[90%] lg:pl-5">
            <p className="w-full pb-3 text-center font-bold">{formatDate(trip.departure_date)}</p>
            <div className="flex w-full">
                <div className="grid w-full grid-cols-1 items-center justify-start gap-5 lg:grid-cols-2">
                    <div className="flex gap-5">
                        <img
                            src={
                                trip.airlines === 'Emirates Airlines'
                                    ? '/cities/Emirates_logo.jpg'
                                    : trip.airlines === 'Ethiopian Airlines'
                                      ? '/cities/Ethiopian_Airlines.png'
                                      : '/cities/qatar_airways.png'
                            }
                            alt={`${trip.airlines} logo`}
                            className="aspect-square h-14 w-14 rounded-lg object-cover"
                        />
                        <div className="flex flex-col gap-2">
                            <p className="flex gap-3 font-bold">
                                {trip.take_off_time.slice(0, 5)} - {trip.landing_time.slice(0, 5)}
                            </p>
                            <p className="font-thin">{trip.airlines}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <h6 className="top-0 flex items-start justify-start gap-3 font-bold">
                            {trip.from_city} - {trip.to_city}
                        </h6>

                        <p>
                            Travel time: {trip.duration}
                            {parseInt(trip.duration) >= 1 ? ' hours' : ' hour'}
                        </p>
                    </div>
                </div>
                <div className="flex h-full flex-col items-center justify-end">
                    <h6 className="text-lg font-bold whitespace-nowrap">
                        {trip.price.toLocaleString()} Birr <span className="text-base font-normal">/person</span>
                    </h6>

                    <span>{(trip.price * parseInt(adults ?? '1', 10)).toLocaleString()} total</span>
                </div>
            </div>
        </div>
    );
}
