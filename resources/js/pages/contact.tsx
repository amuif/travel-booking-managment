import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@/lib/schema';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface flashProps extends Record<string, unknown> {
    flash: {
        success: string;
    };
}
const Contact = () => {
    const { flash } = usePage<flashProps>().props;

    const { data, setData, post, errors, setError, reset } = useForm({
        name: '',
        email: '',
        message: '',
        company: '',
        subject: '',
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('errors', errors);
        const result = contactSchema.safeParse(data);
        if (result.success) {
            post(route('contact'), {
                preserveScroll: true,
            });
            reset();
        } else {
            toast.error('Please fix the errors in the form.');
            console.log(result.error.errors);
            result.error.errors.forEach((err) => {
                const field = err.path[0] as keyof typeof data;
                setError(field, err.message);
            });
        }
    };
    useEffect(() => {
        if (flash?.success) {
            toast(flash.success, {
                description: new Date().toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                }),
            });
            setData({
                name: '',
                email: '',
                message: '',
                company: '',
                subject: '',
            });
        }
    }, [flash, setData]);
    return (
        <div className="">
            <Head title="Contact" />
            <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                <div className="flex items-start justify-center">
                    <h1 className="w-full text-center text-2xl lg:text-5xl">Let's Collaberate</h1>
                </div>
                <div>
                    <form className="flex flex-col gap-5 px-3" onSubmit={onSubmit}>
                        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
                            <div className="flex w-full flex-col gap-2 lg:w-1/2">
                                <Label>Name</Label>
                                <Input placeholder="Fill your name here" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                {errors.name && <small className="text-destructive">{errors.name}</small>}
                            </div>
                            <div className="flex w-full flex-col gap-2 lg:w-1/2">
                                <Label>Email</Label>
                                <Input placeholder="Fill your email here" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                {errors.email && <small className="text-destructive">{errors.email}</small>}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
                            <div className="flex w-full flex-col gap-2 lg:w-1/2">
                                <Label>Subject</Label>
                                <Input
                                    placeholder="Fill the subject of your message"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                />
                                {errors.subject && <small className="text-destructive">{errors.subject}</small>}
                            </div>
                            <div className="flex w-full flex-col gap-2 lg:w-1/2">
                                <Label>Company</Label>
                                <Input
                                    placeholder="Fill your company name(optional)"
                                    value={data.company}
                                    onChange={(e) => setData('company', e.target.value)}
                                />
                                {errors.company && <small className="text-destructive">{errors.company}</small>}
                            </div>
                        </div>{' '}
                        <div className="flex flex-col gap-2">
                            <Label>Message</Label>
                            <Textarea
                                placeholder="Enter your message here"
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                            />{' '}
                            {errors.message && <small className="text-destructive">{errors.message}</small>}
                        </div>
                        <div className="mx-auto">
                            <Button className="w-fit" size="lg">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
