import AboutUsGallery from './gallery-grid';
import OurStory from './our-story';

const AboutUsPage = () => {
    return (
        <div className="px-5">
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="w-full lg:w-[60%]">
                    <AboutUsGallery />
                </div>
                <div className="w-full lg:w-[40%]">
                    <OurStory />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
