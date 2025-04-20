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
            <TextAnimate animation="blurInUp" by="character"  className="absolute inset-0 !opacity-0 group-hover:!opacity-100 flex items-end justify-start p-5 text-white font-extrabold text-xl lg:text-4xl transition-all duration-300">{text}</TextAnimate>
        </div>
    );
};
