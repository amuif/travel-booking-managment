import ExploreLanding from '@/components/custom/explore/exploreLanding';
import Destinations from '@/components/custom/home/destinations';
import { Head } from '@inertiajs/react';

const Explore = () => {
    return (
        <div>
            <Head title="Explore"></Head>
            <ExploreLanding />
            <Destinations />
        </div>
    );
};

export default Explore;
