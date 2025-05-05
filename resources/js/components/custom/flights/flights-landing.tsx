import { Trips } from '@/types/trips';
import { differenceInMinutes, formatDuration, intervalToDuration, parse } from 'date-fns';

export type FlightsLandingProps = {
    trips: Trips[];
};

function getTravelDuration(start: string, end: string) {
    const today = new Date().toISOString().split('T')[0]; // e.g. "2025-05-05"

    const startTime = parse(`${today} ${start}`, 'yyyy-MM-dd HH:mm:ss', new Date());
    const endTime = parse(`${today} ${end}`, 'yyyy-MM-dd HH:mm:ss', new Date());

    let durationMins = differenceInMinutes(endTime, startTime);

    // Handle overnight flights
    if (durationMins < 0) {
        durationMins += 24 * 60;
    }

    const duration = intervalToDuration({ start: 0, end: durationMins * 60 * 1000 });

    return formatDuration(duration); // e.g. "10 hours 30 minutes"
}

const FlightsLanding = ({ trips }: FlightsLandingProps) => {
    return (
        <div className="flex flex-col gap-4 p-3 px-2">
            {trips.map((trip) => (
                <div key={trip.id}>
                    <FlightCard trip={trip} />
                </div>
            ))}{' '}
        </div>
    );
};

export default FlightsLanding;

type FlightCardProps = {
    trip: Trips;
};
export function FlightCard({ trip }: FlightCardProps) {
    const searchParams = new URLSearchParams(window.location.search);
    const adults = searchParams.get('adults');
    return (
        <div className="mx-auto flex w-full rounded-lg bg-[#F0F3F5] px-3 py-5 lg:w-[70%] lg:pl-5">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-5 lg:grid-cols-2">
                <div className="flex gap-5">
                    <img
                        src={trip.airlines === 'Emirates' ? 'cities/Emirates_logo.jpg' : 'cities/Ethiopian_Airlines.png'}
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

                    <p>Travel time: {getTravelDuration(trip.take_off_time, trip.landing_time)}</p>
                </div>
            </div>
            <div className="flex h-full flex-col items-center justify-end">
                <h6 className="text-lg font-bold whitespace-nowrap">
                    {trip.price.toLocaleString()} Birr <span className="text-base font-normal">/person</span>
                </h6>

                <span>{(trip.price * parseInt(adults ?? '1', 10)).toLocaleString()} total</span>
            </div>
        </div>
    );
}
