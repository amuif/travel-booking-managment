import FlightsLanding, { FlightsLandingProps } from '@/components/custom/flights/flights-landing';
import { Head } from '@inertiajs/react';

const Flights = ({ trips }: FlightsLandingProps) => {
    console.log(trips);
    return (
        <div>
            <Head title="Flights" />
            <FlightsLanding trips={trips} />
        </div>
    );
};

export default Flights;
