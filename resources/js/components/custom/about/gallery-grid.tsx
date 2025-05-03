//import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from '@radix-ui/react-icons';
//
//const features = [
//    {
//        Icon: FileTextIcon,
//        name: 'Save your files',
//        description: 'We automatically save your files as you type.',
//        href: '/',
//        cta: 'Learn more',
//        background: <img className="absolute -top-20 -right-20 opacity-60" src="/cities/about_big_v.-jpg" />,
//        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
//
//        src: '/cities/about_big_v.jpg',
//    },
//    {
//        Icon: InputIcon,
//        name: 'Full text search',
//        description: 'Search through all your files in one place.',
//        href: '/',
//        cta: 'Learn more',
//        background: <img className="absolute -top-20 -right-20 opacity-60" />,
//        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
//        src: '/cities/about_h.jpg',
//    },
//    {
//        Icon: GlobeIcon,
//        name: 'Multilingual',
//        description: 'Supports 100+ languages and counting.',
//        href: '/',
//        cta: 'Learn more',
//        background: <img className="absolute -top-20 -right-20 opacity-60" />,
//        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
//        src: '/cities/mid-v.jpg',
//    },
//    {
//        Icon: CalendarIcon,
//        name: 'Calendar',
//        description: 'Use the calendar to filter your files by date.',
//        href: '/',
//        cta: 'Learn more',
//        background: <img className="absolute -top-20 -right-20 opacity-60" />,
//        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
//        src: '/cities/smaller_h.jpg',
//    },
//    {
//        Icon: BellIcon,
//        name: 'Notifications',
//        description: 'Get notified when someone shares a file or mentions you in a comment.',
//        href: '/',
//        cta: 'Learn more',
//        background: <img className="absolute -top-20 -right-20 opacity-60" />,
//        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
//        src: '/cities/small-v.jpg',
//    },
//];

export default function AboutUsGallery() {
    return (
        <>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
                <div className="flex flex-col gap-2">
                    <div className="h-80 cursor-pointer rounded-xl border p-1 shadow-xl transition-all duration-300 hover:-translate-y-2 lg:h-[60%]">
                        <img src="/cities/mid-v.jpg" alt="our image" className="h-full w-full rounded-xl" />
                    </div>
                    <div className="h-full cursor-pointer rounded-xl p-1 shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <img src="/cities/about_h.jpg" alt="our image" className="h-full w-full rounded-xl" />
                    </div>
                </div>
                <div className="h-full cursor-pointer rounded-xl border p-1 shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img src="/cities/about_big_v.jpg" alt="our image" className="h-full w-full rounded-xl" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-full cursor-pointer rounded-xl p-1 shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <img src="/cities/smaller_h.jpg" alt="our image" className="h-full w-full rounded-xl" />
                    </div>
                    <div className="h-full cursor-pointer rounded-xl border p-1 shadow-xl transition-all duration-300 hover:-translate-y-2 lg:h-[60%]">
                        <img src="/cities/small-v.jpg" alt="our image" className="h-full w-full rounded-xl" />
                    </div>
                </div>
            </div>
        </>
    );
}
