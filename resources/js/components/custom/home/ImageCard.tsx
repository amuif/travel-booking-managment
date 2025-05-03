import { cn } from '@/lib/utils';
import React from 'react';
import { TextAnimate } from '../../ui/text-animate';

interface CardProps {
    src: string;
    text: string;
    className?: string;
}
export const ImageCard: React.FC<CardProps> = ({ src, text, className }) => {
    return (
        <div className="group relative hover:cursor-pointer">
            <img src={src} alt={`${text} photo`} className={cn(className, 'object-cover')} />
            <TextAnimate
                animation="blurInUp"
                by="character"
                className="absolute inset-0 flex items-end justify-start p-5 text-xl font-extrabold text-white !opacity-0 transition-all duration-300 group-hover:!opacity-100 lg:text-4xl"
            >
                {text}
            </TextAnimate>
        </div>
    );
};
