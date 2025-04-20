import { Button } from '@/components/ui/button';

const AboutUs = () => {
    return (
        <div className="flex flex-col items-start justify-start gap-5 px-5 lg:flex-row lg:gap-10">
            <div className="flex items-start justify-start">
                <img
                    src="/cities/about-us.jpg"
                    alt="Our agency Photo"
                    className="shadow-xl/30 h-64 w-72 rounded-xl object-cover lg:h-[500px] lg:w-[600px]"
                />
            </div>
            <div className="flex flex-col gap-5 lg:w-1/2">
                <span className="font-extrabold uppercase">Who we are</span>
                <h3 className="text-2xl lg:text-5xl">
                    Travel To The Any <br />
                    Corner Of <span className="font-extrabold"> The World </span>
                </h3>
                <p className="text-lg text-wrap text-gray-500 lg:text-2xl">
                    When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.
                    Our vision is to make travel experience special so you can relax knowing we've designed your trip with the utmost care.
                </p>
                <Button size="lg" className="bottom-0 flex w-fit p-7 text-2xl mt-6 shadow-xl/30">
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default AboutUs;
