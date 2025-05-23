import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

interface menuItemsProps {
    id: string;
    name: string;
    link: string;
}
const menuItems: menuItemsProps[] = [
    {
        id: '1',
        name: 'Home',
        link: '/',
    },
    {
        id: '2',
        name: 'Explore',
        link: '/explore',
    },
    {
        id: '3',
        name: 'About Us',
        link: '/about',
    },
    {
        id: '4',
        name: 'Blog',
        link: '/blogs',
    },
];
const NavigationMenu = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return <div className="md:py-8">{isMobile ? <MobileNavigationMenu /> : <DesktopNavigationMenu />}</div>;
};

export default NavigationMenu;

export const MobileNavigationMenu = () => {
    return <div></div>;
};

export const DesktopNavigationMenu = () => {
    return (
        <div className="mx-auto flex w-[95%] items-center justify-between pb-6 lg:pb-10">
            <div className="text-xl font-extrabold md:text-3xl">
                {' '}
                <p className="whitespace-nowrap">
                    Tour <span className="text-primary">Nest</span>
                </p>
            </div>
            <div className="mx-auto flex gap-10 text-xl">
                {menuItems.map(({ id, name, link }) => (
                    <a key={id} href={link}>
                        {name}
                    </a>
                ))}
            </div>
            {/* <ModeToggle /> */}
            <Button variant="ghost" onClick={() => (window.location.href = '/contact')}>
                Contact Us
            </Button>
        </div>
    );
};
