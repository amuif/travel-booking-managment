import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { LucideSearch, Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const ExploreLanding = () => {
    const [destination, setDestination] = useState({
        from: '',
        to: '',
    });
    const [travelers, setTravelers] = useState([
        { name: 'Adult', person: 1 },
        { name: 'Students over 18', person: 0 },
        { name: 'Seniors over 65', person: 0 },
        { name: 'Youths 12-17', person: 0 },
        { name: 'Children 2-11', person: 0 },
        { name: 'Toddlers in own Seat under 2', person: 0 },
        { name: 'Infants on lap under 2', person: 0 },
    ]);
    const [totalPerson, setTotalPerson] = useState(1);

    useEffect(() => {
        const totatTravelers = travelers.reduce((sum, traveler) => sum + traveler.person, 0);
        setTotalPerson(totatTravelers);
    }, [travelers]);
    const handleIncrementTraveler = (index: number) => {
        setTravelers((prevTravelers) => prevTravelers.map((traveler, i) => (i === index ? { ...traveler, person: traveler.person + 1 } : traveler)));
    };

    const handleDecrementTraveler = (index: number) => {
        setTravelers((prevTravelers) =>
            prevTravelers.map((traveler, i) => (i === index && traveler.person > 0 ? { ...traveler, person: traveler.person - 1 } : traveler)),
        );
    };

    //    function goToDynamicRoute(){
    //        if(!from || !to) return
    ////navigate(`/flights/${flight_id}`)
    //    }
    return (
        <div className="w-full">
            <h3 className="mx-auto w-full px-5 py-5 text-center text-3xl font-normal text-black lg:w-[80%] lg:py-12 lg:text-5xl">
                Manage your flights with <br />
                <span className="font-bold"> seamless booking and better deals.</span>
            </h3>
            <div className="mx-auto flex flex-col gap-5 rounded-xl bg-[#F0F3F5] p-6 lg:flex-row">
                <div className="flex w-full flex-col gap-3 lg:w-1/2 lg:flex-row">
                    <Input
                        value={destination.from}
                        placeholder="From?"
                        onChange={(e) => setDestination((prev) => ({ ...prev, from: e.target.value }))}
                        className="h-14 w-full bg-[#F0F3F5] lg:w-1/2"
                    />
                    <Input
                        value={destination.to}
                        placeholder="To?"
                        onChange={(e) => setDestination((prev) => ({ ...prev, to: e.target.value }))}
                        className="h-14 w-full lg:w-1/2"
                    />
                </div>
                <div className="flex flex-col gap-3 lg:flex-row">
                    <div className="flex w-full flex-col items-center justify-center gap-3 lg:w-fit lg:flex-row">
                        <DatePickerWithRange className="h-14 cursor-pointer items-center justify-center" />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer" asChild>
                            <Button variant="ghost" className="flex h-14 gap-2">
                                {totalPerson} {totalPerson > 1 ? 'persons' : 'person'}
                            </Button>
                        </DropdownMenuTrigger>
                        <SimpleBar autoHide>
                            <DropdownMenuContent side="bottom" className="flex w-[400px] flex-col gap-4 p-3">
                                <p className="py-3 font-bold">Travelers</p>
                                {travelers.map(({ name, person }, index) => (
                                    <div className="flex items-center justify-between font-light" key={index}>
                                        {' '}
                                        <div className="flex gap-2">
                                            <span>{name}</span>
                                        </div>
                                        <div className="flex flex-row items-center justify-end gap-4">
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    console.log('decrementing');
                                                    handleDecrementTraveler(index);
                                                }}
                                                className="h-4 w-4 cursor-pointer rounded-md p-2"
                                                variant="outline"
                                                disabled={person === 0}
                                            >
                                                <Minus className="h-2 w-2" />
                                            </Button>
                                            <span>{person} </span>
                                            <Button
                                                size="sm"
                                                className="h-4 w-4 cursor-pointer rounded-md p-2"
                                                variant="outline"
                                                onClick={() => {
                                                    handleIncrementTraveler(index);
                                                }}
                                            >
                                                <Plus className="h-2 w-2" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </DropdownMenuContent>
                        </SimpleBar>
                    </DropdownMenu>
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        className="cursor-pointer"
                        onClick={() => {
                            if (!destination.from && !destination.to) return;
                            window.location.href = `/flights?from=${destination.from.replace(/\s+/g, '_')}&to=${destination.to.replace(/\s+/g, '_')}&adults=${totalPerson}`;
                        }}
                    >
                        <LucideSearch />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ExploreLanding;
