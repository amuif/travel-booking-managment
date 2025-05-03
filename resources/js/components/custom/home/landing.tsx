import { Button } from '../../ui/button';
import { CustomDatePicker } from '../../ui/date-picker';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

const Landing = () => {
    return (
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 md:h-[80dvh]">
            <div className="flex w-full flex-col gap-6 md:w-[80%]">
                <p className="text-center text-3xl md:text-5xl lg:text-7xl">
                    {' '}
                    Wherever You Go,
                    <br />
                    Let Us <span className="text-primary font-[1000]"> Make It Happen </span>
                </p>

                <p className="text-center text-xl">
                    Take the unique chance to get the most unforgettable experience. <br />
                    These are the emotions you will never forget.
                </p>
            </div>
            <div className="mx-auto flex w-full items-end gap-3 space-x-0.5 rounded-xl border-none p-4 shadow-lg md:w-[90%]">
                <div className="h-full w-1/2">
                    <Label className="px-2">Destination</Label>
                    <Input placeholder="Where would you like to go?" aria-label="destination input" className="h-16 border-none focus:border-none" />
                </div>
                <div className="flex w-1/2 flex-col gap-1">
                    <Label className="px-2">Date</Label>
                    <CustomDatePicker className="h-16 w-full border-none focus:border-none" />
                </div>
                <div className="w-full md:w-1/5">
                    <Button className="bg-primary flex items-center justify-end px-10 py-8 text-xl text-white md:text-3xl">Explore</Button>
                </div>{' '}
            </div>
        </div>
    );
};

export default Landing;
