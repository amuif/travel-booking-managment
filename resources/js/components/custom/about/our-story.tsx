import { ProgressStep, ProgressStepper } from '@/components/ui/stepper';

const steps = [
    {
        year: '2024',
        name: 'Launch',
        description: 'Official product launch and marketing',
        // icon: <Rocket className="h-4 w-4" />,
    },
    {
        year: '2023',
        name: 'Documentation',
        description: 'Creating comprehensive documentation',
        // icon: <FileText className="h-4 w-4" />,
    },
    {
        year: '2022',
        name: 'Development',
        description: 'Core development and implementation',
        // icon: <Code className="h-4 w-4" />,
    },
];

const OurStory = () => {

    return (
        <div>
            <h3 className="text-2xl lg:text-5xl">Our Story</h3>
            <p className="py-6 lg:py-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining.
            </p>

            <ProgressStepper >
                {steps.map((step, index) => (

                    <div
                        key={index}
                        className="hover:bg-muted/50 -ml-2  rounded-lg 2 transition-colors"
                    >
                        <ProgressStep
                            year={step.year}
                            name={step.name}
                            description={step.description}
                            // icon={step.icon}
                            isCompleted={index <2}
                        />
                    </div>
                ))}
            </ProgressStepper>
        </div>
    );
};

export default OurStory;
