import AboutUs from '@/components/custom/home/about-us';
import AdventurePhoto from '@/components/custom/home/adventure-photos';
import Destinations from '@/components/custom/home/destinations';
import ExploreSection from '@/components/custom/home/explore-card';
import Landing from '@/components/custom/home/landing';
import Reviews from '@/components/custom/home/reviews';
import HoverTextsOnVideo from '@/components/custom/home/video-player';
import WhatWeDid from '@/components/custom/home/what-we-did';
import WhatWeDo from '@/components/custom/home/what-we-do';
import { type SharedData } from '@/types';
import { TTrips } from '@/types/trips';
import { TUser } from '@/types/users';
import { Head, usePage } from '@inertiajs/react';

export default function Home({ trips, users }: { trips: TTrips[]; users: TUser[] }) {
    const { auth } = usePage<SharedData>().props;
    // console.log(users);
    return (
        <div className="flex flex-col gap-4 space-y-14 md:gap-10 lg:gap-14">
            <Head title="Tour Nest">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex flex-col gap-10">
                {' '}
                <Landing />
                <HoverTextsOnVideo />
            </div>
            <ExploreSection />
            <AboutUs />
            <WhatWeDid />
            <WhatWeDo />
            <Destinations />
            <AdventurePhoto />
            <Reviews users={users} />
        </div>
    );
}
