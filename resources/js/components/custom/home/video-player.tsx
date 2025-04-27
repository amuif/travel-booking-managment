import { motion } from 'framer-motion';

export default function BackgroundVideo() {
    // const { scrollY } = useScroll();
    // useMotionValueEvent(scrollY, 'change', (latest) => {
    //     console.log('Page scroll: ', latest);
    // });
    return (
        <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.2 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            animate={{ scale: 1 }}
            className="relative mx-auto aspect-video h-96 w-full scale-115 overflow-hidden rounded-md p-5 lg:my-10 lg:h-[300px] lg:w-[65%]"
        >
            <video className="absolute top-0 left-0 z-0 h-full w-full object-cover" autoPlay loop muted playsInline>
                <source src="/demo_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/30" />

            <motion.div className="relative z-20 flex h-full items-center justify-center text-4xl font-bold text-white">Discover places</motion.div>
            <motion.div className="relative z-20 flex h-full items-center justify-center text-4xl font-bold text-white">
                Hello on second of video
            </motion.div>
            <div className="relative z-20 flex h-full items-center justify-center text-4xl font-bold text-white">Hello on third of video</div>
        </motion.div>
    );
}
