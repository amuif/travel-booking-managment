import { ImageCard } from './ImageCard';

const ExploreSection = () => {
    return (
        <div className="flex flex-col gap-4 px-5 py-10">
            <h3 className="text-2xl lg:text-5xl">
                Wander the Globe,<span className="font-extrabold"> One Sunset at a Time</span>{' '}
            </h3>
            <p className="text-muted-foreground text-xl lg:text-3xl">
                The best things in travel aren&apos;t things they&apos;re <br />
                the sun&apos;s first light and last glow on new horizons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <ImageCard src="cities/dubai.jpg" text="Dubai" className='rounded-lg h-80 w-auto object-fit'/>
                </div>
                <div>
                    <ImageCard src="cities/greece.jpg" text="Greece"  className='rounded-lg h-80 w-auto  object-fit'/>
                </div>
                <div>
                    <ImageCard src="cities/italy.jpg" text="Italy" className='rounded-lg h-80 w-auto  object-fit'/>
                </div>
            </div>
        </div>
    );
};

export default ExploreSection;
